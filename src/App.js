// Lets segregate into different files

import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { THEME_DARK_CONTEXT } from "./utils/themeContext";
import FunctionalApp from "./components/FunctionalApp";

const theme = createTheme(THEME_DARK_CONTEXT);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <NextUIProvider theme={theme}>
    <FunctionalApp />
  </NextUIProvider>
);

// this is also known as composition of components
