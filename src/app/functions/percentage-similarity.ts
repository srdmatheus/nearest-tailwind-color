import { TailwindColor } from "../types/tailwind-colors";
import { euclideanDistance } from "./euclidean-distance";

export const percentageSimilarity = (
  color1: TailwindColor,
  color2: TailwindColor,
) => {
  const distance = euclideanDistance(color1, color2);
  const maxDistance = Math.sqrt(255 ** 2 + 255 ** 2 + 255 ** 2);
  const similarity = 100 - (distance / maxDistance) * 100;

  return similarity.toFixed(2);
};
