import { styled } from "common";
export const H1Styled = styled.h1`
  /* Дарт Вейдер Энакин Скайуокер */

  /* accent-text */
  font-size: clamp(1.5rem, 5vw, ${({ theme }) => theme.text.accent.fontSize});
  font-style: ${({ theme }) => theme.text.accent.fontStyle};
  font-weight: ${({ theme }) => theme.text.accent.fontWeight};
  line-height: ${({ theme }) => theme.text.accent.lineHeight};
  letter-spacing: ${({ theme }) => theme.text.accent.letterSpacing};
  color: ${({ theme: { themes, accent, currentTheme } }) =>
    currentTheme !== themes.dark ? accent.light : accent.dark};

  ${({ theme }) => theme.transition("color")}
`;

export const H2Styled = styled.h2`
  /* Владыка Ситх */

  /* main */
  font-weight: ${({ theme }) => theme.text.main.fontWeight};
  font-size: ${({ theme }) => theme.text.main.fontSize};
  line-height: ${({ theme }) => theme.text.main.lineHeight};
  color: ${({ theme: { themes, main, currentTheme } }) =>
    currentTheme !== themes.dark ? main.light : main.dark};

  ${({ theme }) => theme.transition("color")}
`;

export const H3Styled = styled.h3`
  /* Профессиональные и личные достижения */

  /* header-2 */
  font-weight: ${({ theme }) => theme.text.heading.fontWeight};
  font-size: ${({ theme }) => theme.text.heading.fontSize};
  line-height: ${({ theme }) => theme.text.heading.lineHeight};
  color: ${({ theme: { themes, accent, currentTheme } }) =>
    currentTheme !== themes.dark ? accent.light : accent.dark};

  ${({ theme }) => theme.transition("color")}
`;
