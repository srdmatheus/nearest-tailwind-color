"use client";

import { useEffect } from "react";
import { ColorPicker as Picker, useColor } from "react-color-palette";
import "react-color-palette/css";

import { useColorContext } from "@/contexts/color";

export const ColorPicker = () => {
  const [colorPicker, setColorPicker] = useColor("#38deb9");

  const { hex } = colorPicker;

  const { updateColor } = useColorContext();
  
  useEffect(() => {
    updateColor(hex);
  }, [updateColor, hex]);

  return (
    <Picker
      hideAlpha
      color={colorPicker}
      onChange={setColorPicker}
      height={150}
      hideInput={["hsv"]}
    /> 
  );
};
