'use client';

import { useState } from 'react';
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
  PromptInputSubmit,
  type MentionResource,
} from './prompt-input';

export function PromptInputExample() {
  const [message, setMessage] = useState('');

  // Example session resources
  const sessions: MentionResource[] = [
    { id: '1', name: 'Project kick-off', type: 'Session' },
    { id: '2', name: 'Research workshop', type: 'Session' },
    { id: '3', name: 'Tech discovery', type: 'Session' },
  ];

  const handleMentionSelect = (resource: MentionResource) => {
    console.log('Selected resource:', resource);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted message:', message);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-lg font-semibold mb-4">
        Prompt Input with @ Mentions
      </h2>

      <PromptInput onSubmit={handleSubmit}>
        <PromptInputTextarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type @ to mention a session..."
          mentionResources={sessions}
          onMentionSelect={handleMentionSelect}
        />
        <PromptInputToolbar>
          <PromptInputTools>
            {/* Add any additional tools here */}
          </PromptInputTools>
          <PromptInputSubmit />
        </PromptInputToolbar>
      </PromptInput>

      <div className="mt-4 text-sm text-muted-foreground">
        <p>Try typing @ followed by any part of a session name:</p>
        <ul className="list-disc list-inside mt-2">
          <li>@Project kick-off</li>
          <li>@Research workshop</li>
          <li>@Tech discovery</li>
        </ul>
        <p className="mt-2">
          Use arrow keys to navigate, Enter/Tab to select, Escape to cancel.
        </p>
      </div>
    </div>
  );
}