import { readableColor } from "polished";
import { ComponentProps } from "react";

import { TailwindColor } from "@/types/tailwind-colors";

type ColorSectionProps = ComponentProps<"div"> & {
  children: React.ReactNode;
  color?: string;
  rgbColor?: TailwindColor;
};
export const ColorSection = ({
  children,
  color,
  rgbColor = { r: 240, g: 240, b: 240 },
}: ColorSectionProps) => {
  const { r, g, b } = rgbColor;
  const background = color ? color : `rgb(${r}, ${g}, ${b})`;
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: background,
        color: readableColor(background),
      }}
    >
      {children}
    </div>
  );
};
