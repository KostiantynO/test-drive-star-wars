import { styled, theme } from "common";

export const ToggleStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  span {
    color: ${({ theme: { themes, main, currentTheme } }) =>
      currentTheme !== themes.dark ? main.light : main.dark};

    @media screen and (max-width: 480px) {
      display: none;
    }
  }
`;
