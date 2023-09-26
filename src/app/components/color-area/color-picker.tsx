"use client";

import { useColorContext } from "@/contexts/color";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";
import { ColorPicker as Picker, useColor } from "react-color-palette";
import "react-color-palette/css";
import { ColorButton } from "./color-button";

export const ColorPicker = () => {
  const [colorPicker, setColorPicker] = useColor("#561ecb");
  const [showColorPicker, setShowColorPicker] = useState(false);

  const { hex } = colorPicker;

  const { dispatch } = useColorContext();
  useEffect(() => {
    dispatch({
      type: "UPDATE_COLOR",
      payload: hex,
    });
  }, [dispatch, hex]);

  return (
    <>
      <div className="relative">
        <div
          className={cn(
            "-left-8 bottom-0",
            showColorPicker ? "absolute" : "hidden",
          )}
        >
          <Picker
            hideAlpha
            color={colorPicker}
            onChange={setColorPicker}
            height={150}
          />
        </div>
      </div>
      <ColorButton
        className="absolute bottom-36 items-center justify-center gap-2 rounded-md p-3 text-xl font-bold transition-all hover:bg-white/20"
        onClick={() => setShowColorPicker(!showColorPicker)}
      >
        {hex}
      </ColorButton>
    </>
  );
};
