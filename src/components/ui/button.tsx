import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
	{
		variants: {
			variant: {
				default:
					'bg-primary text-primary-foreground heading-sm hover:bg-primary/90',
				secondary:
					'bg-secondary text-secondary-foreground heading-sm hover:bg-secondary/80 focus-visible:ring-primary',
				destructive:
					'bg-destructive text-white heading-sm hover:bg-destructive/90 focus-visible:ring-destructive/20',
				outline:
					'border border-primary bg-transparent heading-sm hover:bg-accent hover:text-primary',
				ghost:
					'bg-transparent heading-sm hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
			},
			size: {
				sm: 'h-10 rounded-sm px-4 has-[>svg:first-child]:pl-3 has-[>svg:last-child]:pr-3',
				default:
					'h-12 rounded-sm px-4 has-[>svg:first-child]:pl-3 has-[>svg:last-child]:pr-3',
				lg: 'h-16 rounded-sm px-6 has-[>svg:first-child]:pl-5 has-[>svg:last-child]:pr-5',
				icon: 'rounded-sm size-9',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
)

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<'button'> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean
	}) {
	const Comp = asChild ? Slot : 'button'

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	)
}

export { Button, buttonVariants }
