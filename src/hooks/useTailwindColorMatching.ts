import { useColorContext } from "@/contexts/color";
import { findClosestTailwindClass } from "@/functions/find-closest-tailwind-class";
import { percentageSimilarity } from "@/functions/percentage-similarity";
import { useState, useEffect } from "react";

export const useTailwindColorMatching = () => {
  const { color } = useColorContext();
  const [nearestColor, setNearestColor] = useState("");
  const [similarity, setSimilarity] = useState("");

  const { closestClass, rgbTailwindColor, rgbUserColor } =
    findClosestTailwindClass(color);
  const simillar = percentageSimilarity(rgbUserColor, rgbTailwindColor);

  useEffect(() => {
    setSimilarity(simillar);
    setNearestColor(closestClass);
  }, [
    closestClass,
    color,
    nearestColor,
    rgbTailwindColor,
    similarity,
    simillar,
  ]);

  return {
    nearestColor,
    similarity,
  };
};
