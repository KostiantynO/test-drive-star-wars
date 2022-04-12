import sprite from "img/sprite.svg";
export { StrictMode, Component, createContext, useContext } from "react";
export { render } from "react-dom";
export * from "context";
export { default as styled, ThemeProvider } from "styled-components";
export { default as PropTypes } from "prop-types";
export { nanoid } from "nanoid";

export { default as stardust } from "img/photos/stardust.webp";
export { default as space } from "img/photos/space.webp";
export { default as darthVader } from "img/photos/darth-vader.webp";
export { default as deathStar } from "img/photos/death-star.webp";
export * from "json";
export const iconPath = (name) => `${sprite}#icon-${name}`;
export * from "./theme";
export * from "common/components";
