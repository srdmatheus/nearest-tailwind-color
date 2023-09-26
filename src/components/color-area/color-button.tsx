import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

type ColorButtonProps = ComponentProps<"button"> & {
  children: string;
  className?: string;
};
export const ColorButton = ({
  children,
  className,
  ...props
}: ColorButtonProps) => {
  return (
    <button
      className={cn(
        "min-w-[148px] items-center justify-center gap-2 rounded-md p-3 text-xl font-bold transition-all hover:bg-white/20",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
