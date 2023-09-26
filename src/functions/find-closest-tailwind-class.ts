import { tailwindColorClasses } from "@/constants/tailwind-colors";
import { euclideanDistance } from "./euclidean-distance";

export const findClosestTailwindClass = (userColor: string) => {
  let closestClass = "";
  let closestDistance = Infinity;
  let rgbTailwindColor = { r: 0, g: 0, b: 0 };

  const hex = userColor.replace(/^#/, "");

  const rgbUserColor = {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16),
  };

  for (const className in tailwindColorClasses) {
    const tailwindColor = tailwindColorClasses[className];
    const distance = euclideanDistance(rgbUserColor, tailwindColor);

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

  return { closestClass, rgbUserColor, rgbTailwindColor };
};
