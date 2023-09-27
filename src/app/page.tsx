"use client";

import { ColorArea } from "@/components/color-area";
import { useColorContext } from "@/contexts/color";
import { findClosestTailwindClass } from "@/functions/find-closest-tailwind-class";
import { useTailwindColorMatching } from "@/hooks/useTailwindColorMatching";

export default function Home() {
  const { color } = useColorContext();
  const { nearestColor, similarity } = useTailwindColorMatching();
  const { rgbTailwindColor } = findClosestTailwindClass(color);

  const handleCopy = () => {
    navigator.clipboard.writeText(nearestColor);
  };

  return (
    <main className="grid-row-2 grid h-full md:grid-cols-2">
      <div className="flex min-h-[50%] md:min-h-screen">
        <ColorArea.Root color={color}>
          <div className="pt-16">
            <ColorArea.Picker />
          </div>
        </ColorArea.Root>
      </div>
      <ColorArea.Root rgbColor={rgbTailwindColor}>
        <div className="relative pt-16 text-center">
          <ColorArea.Button onClick={handleCopy} title="Click to copy">
            {nearestColor}
          </ColorArea.Button>

          <p className="absolute -bottom-8 left-0 right-0 text-center">
            {similarity}% similar
          </p>
        </div>
      </ColorArea.Root>
    </main>
  );
}
