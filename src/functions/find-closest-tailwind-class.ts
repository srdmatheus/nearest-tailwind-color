import { tailwindColorClasses } from "@/constants/tailwind-colors";
import { euclideanDistance } from "./euclidean-distance";
import { TailwindColor } from "../types/tailwind-colors";

export const findClosestTailwindClass = (userColor: TailwindColor) => {
  let closestClass = "";
  let closestDistance = Infinity;
  let rgbTailwindColor = { r: 0, g: 0, b: 0 };

  for (const className in tailwindColorClasses) {
    const tailwindColor = tailwindColorClasses[className];
    const distance = euclideanDistance(userColor, tailwindColor);

    if (distance < closestDistance) {
      rgbTailwindColor = {
        r: tailwindColor.r,
        g: tailwindColor.g,
        b: tailwindColor.b,
      };
      closestClass = className;
      closestDistance = distance;
    }
  }

  return { closestClass, rgbTailwindColor };
};
