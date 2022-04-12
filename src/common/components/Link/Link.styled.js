import { styled } from "common";

export const LinkStyled = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px;

  color: ${({ theme: { themes, accent, currentTheme } }) =>
    currentTheme !== themes.dark ? accent.light : accent.dark};

  ${({ theme }) => theme.transition("color")};

  :hover,
  :focus {
    color: ${({ theme: { themes, accent, currentTheme } }) =>
      currentTheme !== themes.dark ? accent.dark : accent.light};
  }
`;
