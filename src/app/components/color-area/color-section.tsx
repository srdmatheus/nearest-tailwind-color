import { TailwindColor } from "@/types/tailwind-colors";
import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

type ColorSectionProps = ComponentProps<"div"> & {
  children?: React.ReactNode;
  color?: string;
  className?: string;
  rgbColor?: TailwindColor;
};
export const ColorSection = ({
  children,
  color,
  className,
  rgbColor = { r: 240, g: 240, b: 240 },
}: ColorSectionProps) => {
  const { r, g, b } = rgbColor!;

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color ? color : `rgb(${r}, ${g}, ${b})`,
      }}
      className={cn(className)}
    >
      {children}
    </div>
  );
};
