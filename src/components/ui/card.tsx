'use client'

import * as React from 'react'
import { motion, HTMLMotionProps } from 'motion/react'

import { cn } from '@/lib/utils'

function Card({ className, ...props }: HTMLMotionProps<'div'>) {
	return (
		<motion.div
			layout
			data-slot="card"
			className={cn(
				'bg-card text-card-foreground flex flex-col rounded-lg gap-6 p-4 relative overflow-hidden shrink-0',
				className,
			)}
			{...props}
		/>
	)
}

function CardHeader({ className, ...props }: HTMLMotionProps<'div'>) {
	return (
		<motion.div
			layout
			data-slot="card-header"
			className={cn('flex flex-col space-y-1.5', className)}
			{...props}
		/>
	)
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-title"
			className={cn('heading-sm flex items-center gap-1.5', className)}
			{...props}
		/>
	)
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-description"
			className={cn('text-muted-foreground text-sm', className)}
			{...props}
		/>
	)
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-action"
			className={cn(
				'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
				className,
			)}
			{...props}
		/>
	)
}

function CardContent({
	className,
	children,
	...props
}: HTMLMotionProps<'div'>) {
	return (
		<motion.div
			layout
			data-slot="card-content"
			className={cn('flex flex-col gap-6 mt-4', className)}
			{...props}
		>
			{children}
		</motion.div>
	)
}

function CardFooter({ className, ...props }: HTMLMotionProps<'div'>) {
	return (
		<motion.div
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			data-slot="card-footer"
			className={cn('flex items-center', className)}
			{...props}
		/>
	)
}

export {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardAction,
	CardDescription,
	CardContent,
}
