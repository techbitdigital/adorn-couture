import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-none tracking-wide";

    const variants = {
      primary:
        "bg-wine-DEFAULT text-white hover:bg-wine-dark focus:ring-wine-DEFAULT",
      secondary:
        "bg-burgundy-950 text-white hover:bg-burgundy-900 focus:ring-burgundy-950",
      outline:
        "border border-wine-DEFAULT text-wine-DEFAULT hover:bg-wine-DEFAULT hover:text-white focus:ring-wine-DEFAULT",
      ghost:
        "text-wine-DEFAULT hover:bg-burgundy-50 focus:ring-wine-DEFAULT",
      whatsapp:
        "bg-[#25D366] text-white hover:bg-[#20b558] focus:ring-[#25D366]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          base,
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
