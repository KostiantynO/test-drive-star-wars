import { space, stardust } from "common";

export const theme = Object.freeze({
  themes: { auto: "auto", dark: "dark", light: "light" },
  breakpoints: [1170],
  text: {
    accent: {
      fontStyle: "italic",
      fontWeight: "700",
      fontSize: "2.875rem",
      lineHeight: "1.3",
      letterSpacing: " 0.02em",
    },

    main: {
      fontWeight: "400",
      fontSize: "1rem",
      lineHeight: "1.5",
    },

    heading: {
      fontWeight: "700",
      fontSize: "1rem",
      lineHeight: "1.5",
    },
  },

  main: { dark: "#FFFFFF", light: "#15141D" },
  accent: { dark: "#FFC700", light: "#4B526A" },
  bgMain: {
    dark: "#212121",
    light: "#FFFFFF",
    bgImage: { light: stardust, dark: space },
  },
  bgSecond: { dark: "#222527", light: "#EBEBEB" },
  bgThird: { dark: "#1b1b1b", light: "#DBDBDB" },
  colors: { passion: "#ef4d5b" },

  spacing: (...args) => args.map((v) => `${v * 4}px`).join(" "),

  transition: (...args) =>
    `transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
     transition-property: ${args.join(", ")};`,

  zIndex: (selector) => {
    const els = ["ContactItemStyled::after", "DeleteContactBtn"];
    for (let i = 0; i < els.length; i++) {
      if (selector === els[i].toLowerCase() || i === els.length) {
        return (i + 1) * 4;
      }
    }
  },
});

export const icons = {
  moon: "moon",
  sun: "sun",
  logo: "logo",
  close: "close",
  tieFighter: "tie-fighter",
  youtube: "youtube",
  twitter: "twitter",
  inst: "inst",
  swords: "swords",
  deathStarSvg: "death-star-svg",
  trooper: "trooper",
  hand: "hand",
  atAt: "at-at",
};
