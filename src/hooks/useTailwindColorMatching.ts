import { useColorContext } from "@/contexts/color";
import { findClosestTailwindClass } from "@/functions/find-closest-tailwind-class";
import { percentageSimilarity } from "@/functions/percentage-similarity";
import { TailwindColor } from "@/types/tailwind-colors";
import { useState, useEffect } from "react";

export const useTailwindColorMatching = () => {
  const { color } = useColorContext();
  const [nearestColor, setNearestColor] = useState("");
  const [rgbTailwindColor, setRgbTailwindColor] = useState({} as TailwindColor);
  const [similarity, setSimilarity] = useState("");

  useEffect(() => {
    const hex = color.replace(/^#/, "");
    const rgbUserColor = {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16),
    };
    const { closestClass, rgbTailwindColor } =
      findClosestTailwindClass(rgbUserColor);

    const simillar = percentageSimilarity(rgbUserColor, rgbTailwindColor);

    setSimilarity(simillar);
    setRgbTailwindColor(rgbTailwindColor);
    setNearestColor(closestClass);
  }, [color]);

  return {
    nearestColor,
    similarity,
    rgbTailwindColor,
  };
};
