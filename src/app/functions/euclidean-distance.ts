import { TailwindColor } from "@/app/types/tailwind-colors";
export const euclideanDistance = (
  color1: TailwindColor,
  color2: TailwindColor,
) => {
  const differenceRed = color1.r - color2.r;
  const differenceGreen = color1.g - color2.g;
  const differenceBlue = color1.b - color2.b;
  return Math.sqrt(
    differenceRed * differenceRed +
      differenceGreen * differenceGreen +
      differenceBlue * differenceBlue,
  );
};
