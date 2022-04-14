import { styled } from "common";

export const ButtonStyled = styled.button.attrs(({ type }) => ({
  type: type === "submit" ? "submit" : "button",
}))`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: ${({ secondary }) =>
    secondary
      ? "clamp(4px, 3vw, 8px) clamp(8px, 3vw, 16px)"
      : "clamp(8px, 3vw, 16px) clamp(16px, 3vw, 32px)"};

  /* Принести клятву верности */ /* main */
  font-family: inherit;
  font-size: ${({ theme }) => theme.text.main.fontSize};
  line-height: ${({ theme }) => theme.text.main.lineHeight};

  color: ${({ theme: { main, themes, currentTheme }, secondary }) => {
    switch (currentTheme) {
      case themes.dark:
        return secondary ? main.dark : main.light;

      case themes.light:
        return secondary ? main.light : main.dark;

      default:
        return secondary ? main.dark : main.light;
    }
  }};

  cursor: pointer;

  background-color: ${({
    theme: { themes, bgSecond, accent, currentTheme },
    secondary,
  }) => {
    switch (currentTheme) {
      case themes.dark:
        return secondary ? bgSecond.dark : accent.dark;

      case themes.light:
        return secondary ? bgSecond.light : accent.light;

      default:
        return secondary ? bgSecond.dark : accent.dark;
    }
  }};

  border: 1px solid
    ${({ secondary }) => (secondary ? "rgba(255,255,255,0.21)" : "transparent")};

  border-radius: ${({ round }) => (round ? "50%" : "40px")};

  ${({ theme }) => theme.transition("color", "background-color", "transform")}

  :hover:not(:disabled), :focus:not(:disabled) {
    background-color: ${({ theme: { themes, accent, currentTheme } }) =>
      currentTheme !== themes.dark ? accent.dark : accent.light};

    transform: scale(1.02);
  }

  :disabled {
    cursor: not-allowed;
    background-color: grey;
    opacity: 0.5;
  }
`;
