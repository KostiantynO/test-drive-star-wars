import { styled } from "common";

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  font-size: clamp(1rem, 3vw, 2rem);

  span {
    color: ${({ theme: { main, themes, currentTheme } }) =>
      currentTheme === themes.dark ? main.dark : main.light};

    ${({ theme }) => theme.transition("color")}
  }
`;
