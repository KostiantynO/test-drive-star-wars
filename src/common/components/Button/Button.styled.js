import { styled } from "common";

export const ButtonStyled = styled.button.attrs(({ type }) => ({
  type: type === "submit" ? "submit" : "button",
}))`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: clamp(8px, 3vw, 16px) clamp(16px, 3vw, 32px);

  /* Принести клятву верности */ /* main */
  font-family: inherit;
  font-size: ${({ theme }) => theme.text.main.fontSize};
  line-height: ${({ theme }) => theme.text.main.lineHeight};
  color: ${({ theme: { themes, main, currentTheme } }) =>
    currentTheme !== themes.dark ? main.dark : main.light};

  cursor: pointer;
  background-color: ${({ theme: { themes, main, accent, currentTheme } }) =>
    currentTheme !== themes.dark ? accent.light : accent.dark};

  border: none;
  border-radius: ${({ round }) => (round ? "50%" : "40px")};

  ${({ theme }) => theme.transition("color", "background-color", "transform")}

  :hover:not(:disabled), :focus:not(:disabled) {
    background-color: ${({ theme: { themes, accent, currentTheme } }) =>
      currentTheme !== themes.dark ? accent.dark : accent.light};

    transform: scale(1.02);
  }

  :disabled {
    background-color: grey;
  }
`;
