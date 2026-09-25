import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-4 type-button text-accent-foreground",
        "transition-colors hover:bg-primary-hover",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
        "disabled:cursor-not-allowed disabled:border disabled:border-disabled-border disabled:bg-disabled disabled:text-accent-foreground disabled:opacity-70 disabled:hover:bg-disabled",
        className,
      )}
      {...props}
    />
  );
}