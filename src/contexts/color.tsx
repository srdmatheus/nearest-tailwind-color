"use client";

import { ReactNode, createContext, useContext, useReducer } from "react";

export type ColorState = {
  color: string;
};

type ColorAction = { type: "UPDATE_COLOR"; payload: string };

const initialState: ColorState = {
  color: "#561ecb",
};

const colorReducer = (state: ColorState, action: ColorAction): ColorState => {
  switch (action.type) {
    case "UPDATE_COLOR":
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

type ColorContextProps = ColorState & {
  dispatch: React.Dispatch<ColorAction>;
};

export const ColorContext = createContext<ColorContextProps>(
  {} as ColorContextProps,
);

export const ColorContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(colorReducer, initialState);

  return (
    <ColorContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColorContext = () => {
  return useContext(ColorContext);
};
