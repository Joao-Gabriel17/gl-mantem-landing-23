import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 rounded-xl px-5 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-0",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "border border-primary-500 text-primary-500 hover:bg-[rgba(255,122,0,0.08)] rounded-xl px-5 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-0",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary-500 underline-offset-4 hover:underline",
        hero: "bg-primary text-primary-foreground hover:bg-primary-600-hsl active:bg-primary-700-hsl font-semibold rounded-xl px-6 py-4 shadow-lg hover:shadow-[0_0_24px_rgba(255,122,0,0.3)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "hero-outline": "border-2 border-border bg-card/50 backdrop-blur-sm text-foreground hover:bg-muted hover:border-primary/50 font-semibold rounded-xl px-6 py-4 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      },
      size: {
        default: "h-10",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
