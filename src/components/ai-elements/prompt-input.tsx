'use client';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import type { ChatStatus } from 'ai';
import { Loader2Icon, SendIcon, SquareIcon, XIcon } from 'lucide-react';
import type {
  ComponentProps,
  HTMLAttributes,
  KeyboardEventHandler,
} from 'react';
import { Children, useRef, useState } from 'react';

export type PromptInputProps = HTMLAttributes<HTMLFormElement>;

export const PromptInput = ({ className, ...props }: PromptInputProps) => (
  <form
    className={cn(
      'w-full divide-y overflow-hidden rounded-xl border bg-background shadow-sm',
      className
    )}
    {...props}
  />
);

export type MentionResource = {
  id: string;
  name: string;
  type?: string;
};

export type PromptInputTextareaProps = ComponentProps<typeof Textarea> & {
  minHeight?: number;
  maxHeight?: number;
  mentionResources?: MentionResource[];
  onMentionSelect?: (resource: MentionResource) => void;
};

export const PromptInputTextarea = ({
  onChange,
  className,
  placeholder = 'What would you like to know?',
  minHeight = 48,
  maxHeight = 164,
  mentionResources = [],
  onMentionSelect,
  ...props
}: PromptInputTextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [showMentions, setShowMentions] = useState(false);
  const [mentionQuery, setMentionQuery] = useState('');
  const [mentionPosition, setMentionPosition] = useState({ top: 0, left: 0 });
  const [selectedMentionIndex, setSelectedMentionIndex] = useState(0);

  const filteredMentions = mentionResources.filter((resource) =>
    resource.name.toLowerCase().includes(mentionQuery.toLowerCase())
  );

  const detectMention = (value: string, cursorPos: number) => {
    const beforeCursor = value.slice(0, cursorPos);
    const atMatch = beforeCursor.match(/@([^@\s]*)$/);

    if (atMatch) {
      const query = atMatch[1];
      setMentionQuery(query);
      setShowMentions(true);
      setSelectedMentionIndex(0);

      // Calculate position for dropdown
      if (textareaRef.current) {
        const textarea = textareaRef.current;
        const style = window.getComputedStyle(textarea);
        const fontSize = Number.parseInt(style.fontSize);
        const lineHeight = Number.parseInt(style.lineHeight) || fontSize * 1.2;

        // Rough calculation for cursor position
        const lines = beforeCursor.split('\n').length;
        const top = (lines - 1) * lineHeight + 40;
        const left = 12; // padding

        setMentionPosition({ top, left });
      }
    } else {
      setShowMentions(false);
    }
  };

  const insertMention = (resource: MentionResource) => {
    if (!textareaRef.current) return;

    const textarea = textareaRef.current;
    const value = textarea.value;
    const cursorPos = textarea.selectionStart;
    const beforeCursor = value.slice(0, cursorPos);
    const afterCursor = value.slice(cursorPos);

    // Find the @ symbol position
    const atMatch = beforeCursor.match(/@([^@\s]*)$/);
    if (atMatch) {
      const atPos = beforeCursor.lastIndexOf('@');
      const newValue = `${value.slice(0, atPos)}@${resource.name} ${afterCursor}`;

      textarea.value = newValue;
      const newCursorPos = atPos + resource.name.length + 2;
      textarea.setSelectionRange(newCursorPos, newCursorPos);

      // Trigger onChange
      const event = new Event('input', { bubbles: true });
      Object.defineProperty(event, 'target', {
        writable: false,
        value: textarea,
      });
      onChange?.(event as unknown as React.ChangeEvent<HTMLTextAreaElement>);
      onMentionSelect?.(resource);
    }

    setShowMentions(false);
    textarea.focus();
  };

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (showMentions && filteredMentions.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedMentionIndex((prev) =>
          Math.min(prev + 1, filteredMentions.length - 1)
        );
        return;
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedMentionIndex((prev) => Math.max(prev - 1, 0));
        return;
      }

      if (e.key === 'Enter' || e.key === 'Tab') {
        e.preventDefault();
        insertMention(filteredMentions[selectedMentionIndex]);
        return;
      }

      if (e.key === 'Escape') {
        e.preventDefault();
        setShowMentions(false);
        return;
      }
    }

    if (e.key === 'Enter') {
      // Don't submit if IME composition is in progress
      if (e.nativeEvent.isComposing) {
        return;
      }

      if (e.shiftKey) {
        // Allow newline
        return;
      }

      // Submit on Enter (without Shift)
      e.preventDefault();
      const form = e.currentTarget.form;
      if (form) {
        form.requestSubmit();
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e);
    detectMention(e.target.value, e.target.selectionStart);
  };

  return (
    <div className="relative">
      <Textarea
        ref={textareaRef}
        className={cn(
          'w-full resize-none rounded-none border-none p-3 shadow-none outline-none ring-0',
          'field-sizing-content max-h-[6lh] bg-transparent dark:bg-transparent',
          'focus-visible:ring-0',
          className
        )}
        name="message"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        {...props}
      />

      {showMentions && filteredMentions.length > 0 && (
        <div
          className="absolute z-50 min-w-[200px] rounded-lg border bg-popover p-1 shadow-lg"
          style={{
            top: mentionPosition.top,
            left: mentionPosition.left,
          }}
        >
          {filteredMentions.map((resource, index) => (
            <button
              key={resource.id}
              type="button"
              className={cn(
                'w-full rounded-md px-2 py-1.5 text-left text-sm transition-colors',
                'hover:bg-accent hover:text-accent-foreground',
                index === selectedMentionIndex && 'bg-accent text-accent-foreground'
              )}
              onClick={() => insertMention(resource)}
            >
              <div className="font-medium">{resource.name}</div>
              {resource.type && (
                <div className="text-xs text-muted-foreground">{resource.type}</div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export type PromptInputToolbarProps = HTMLAttributes<HTMLDivElement>;

export const PromptInputToolbar = ({
  className,
  ...props
}: PromptInputToolbarProps) => (
  <div
    className={cn('flex items-center justify-between p-1', className)}
    {...props}
  />
);

export type PromptInputToolsProps = HTMLAttributes<HTMLDivElement>;

export const PromptInputTools = ({
  className,
  ...props
}: PromptInputToolsProps) => (
  <div
    className={cn(
      'flex items-center gap-1',
      '[&_button:first-child]:rounded-bl-xl',
      className
    )}
    {...props}
  />
);

export type PromptInputButtonProps = ComponentProps<typeof Button>;

export const PromptInputButton = ({
  variant = 'ghost',
  className,
  size,
  ...props
}: PromptInputButtonProps) => {
  const newSize =
    (size ?? Children.count(props.children) > 1) ? 'default' : 'icon';

  return (
    <Button
      className={cn(
        'shrink-0 gap-1.5 rounded-lg',
        variant === 'ghost' && 'text-muted-foreground',
        newSize === 'default' && 'px-3',
        className
      )}
      size={newSize}
      type="button"
      variant={variant}
      {...props}
    />
  );
};

export type PromptInputSubmitProps = ComponentProps<typeof Button> & {
  status?: ChatStatus;
};

export const PromptInputSubmit = ({
  className,
  variant = 'default',
  size = 'icon',
  status,
  children,
  ...props
}: PromptInputSubmitProps) => {
  let Icon = <SendIcon className="size-4" />;

  if (status === 'submitted') {
    Icon = <Loader2Icon className="size-4 animate-spin" />;
  } else if (status === 'streaming') {
    Icon = <SquareIcon className="size-4" />;
  } else if (status === 'error') {
    Icon = <XIcon className="size-4" />;
  }

  return (
    <Button
      className={cn('gap-1.5 rounded-lg', className)}
      size={size}
      type="submit"
      variant={variant}
      {...props}
    >
      {children ?? Icon}
    </Button>
  );
};

export type PromptInputModelSelectProps = ComponentProps<typeof Select>;

export const PromptInputModelSelect = (props: PromptInputModelSelectProps) => (
  <Select {...props} />
);

export type PromptInputModelSelectTriggerProps = ComponentProps<
  typeof SelectTrigger
>;

export const PromptInputModelSelectTrigger = ({
  className,
  ...props
}: PromptInputModelSelectTriggerProps) => (
  <SelectTrigger
    className={cn(
      'border-none bg-transparent font-medium text-muted-foreground shadow-none transition-colors',
      'hover:bg-accent hover:text-foreground [&[aria-expanded="true"]]:bg-accent [&[aria-expanded="true"]]:text-foreground',
      className
    )}
    {...props}
  />
);

export type PromptInputModelSelectContentProps = ComponentProps<
  typeof SelectContent
>;

export const PromptInputModelSelectContent = ({
  className,
  ...props
}: PromptInputModelSelectContentProps) => (
  <SelectContent className={cn(className)} {...props} />
);

export type PromptInputModelSelectItemProps = ComponentProps<typeof SelectItem>;

export const PromptInputModelSelectItem = ({
  className,
  ...props
}: PromptInputModelSelectItemProps) => (
  <SelectItem className={cn(className)} {...props} />
);

export type PromptInputModelSelectValueProps = ComponentProps<
  typeof SelectValue
>;

export const PromptInputModelSelectValue = ({
  className,
  ...props
}: PromptInputModelSelectValueProps) => (
  <SelectValue className={cn(className)} {...props} />
);
