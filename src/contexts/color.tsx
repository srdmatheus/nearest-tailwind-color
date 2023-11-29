"use client";

import { ReactNode, createContext, useContext, useReducer } from "react";

export type ColorState = {
  color: string;
  updateColor: (hex: string) => void
};

type ColorAction = { type: "UPDATE_COLOR"; payload: string };

const initialState: ColorState = {
  color: "#38deb9",
  updateColor: () => {}
};

const colorReducer = (state: ColorState, action: ColorAction): ColorState => {
  switch (action.type) {
    case "UPDATE_COLOR":
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

export const ColorContext = createContext<ColorState>(
  initialState,
);

export const ColorContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(colorReducer, initialState);

  const updateColor = (hex: string) => 
    dispatch({ type: 'UPDATE_COLOR', payload: hex });

  return (
    <ColorContext.Provider value={{ ...state, updateColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColorContext = () => {
  return useContext(ColorContext);
};
