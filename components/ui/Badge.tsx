import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "burgundy" | "outline" | "success" | "muted";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants = {
    default:
      "bg-gray-100 text-gray-700",
    burgundy:
      "bg-wine-DEFAULT text-white",
    outline:
      "border border-wine-DEFAULT text-wine-DEFAULT",
    success:
      "bg-green-50 text-green-700",
    muted:
      "bg-cream-dark text-gray-500",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium tracking-wider uppercase",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
