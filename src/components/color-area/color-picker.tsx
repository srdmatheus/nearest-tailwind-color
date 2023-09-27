"use client";

import { useEffect, useState } from "react";
import { ColorPicker as Picker, useColor } from "react-color-palette";
import "react-color-palette/css";

import { ColorButton } from "@/components/color-area/color-button";

import { useColorContext } from "@/contexts/color";
import { cn } from "@/utils/cn";

export const ColorPicker = () => {
  const [colorPicker, setColorPicker] = useColor("#38deb9");
  const [showColorPicker, setShowColorPicker] = useState(false);

  const { hex } = colorPicker;

  const { dispatch } = useColorContext();
  useEffect(() => {
    dispatch({
      type: "UPDATE_COLOR",
      payload: hex,
    });
  }, [dispatch, hex]);

  const handleOpenColorPicker = () => setShowColorPicker((prev) => !prev);

  return (
    <div className="relative">
      <ColorButton onClick={handleOpenColorPicker}>{hex}</ColorButton>

      <div
        className={cn(
          "left-0 top-14 z-10 md:-top-40 md:left-40",
          showColorPicker ? "absolute" : "hidden",
        )}
      >
        <Picker
          hideAlpha
          color={colorPicker}
          onChange={setColorPicker}
          height={150}
          hideInput={["hsv"]}
        />
      </div>
    </div>
  );
};
