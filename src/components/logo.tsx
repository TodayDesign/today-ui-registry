import { cn } from "@/lib/utils";

export function Logo({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <div className="flex items-center gap-2">
      <svg
			viewBox="0 0 212 212"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			className={cn('h-9', className)}
			{...props}
		>
			<path d="M188.033 106C188.033 153.968 149.088 192.853 101.046 192.853C53.0036 192.853 14.0517 153.968 14.0517 106C14.0517 58.0319 53.0036 19.1403 101.046 19.1403C149.088 19.1403 188.033 58.0253 188.033 106ZM202.085 5.1103H0V206.883H202.085V5.1103Z" />
		</svg>
    <h1 className="font-semibold">Brand Name</h1>
    </div>
  );
}
