import { styled } from "common";

export const ParagraphStyled = styled.p`
  /* main text style */
  font-size: ${({ theme }) => theme.text.main.fontSize};
  line-height: ${({ theme }) => theme.text.main.lineHeight};
  color: ${({ theme: { themes, main, currentTheme } }) =>
    currentTheme !== themes.dark ? main.light : main.dark};

  ${({ theme }) => theme.transition("color")}
`;
