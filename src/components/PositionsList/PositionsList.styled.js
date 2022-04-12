import { styled, List } from "common";

export const PositionsListStyled = styled(List)`
  padding: 0;
  > li {
    position: relative;
    margin-left: clamp(12px, 3vw, 20px);

    ::before {
      content: "";
      position: absolute;
      top: 50%;
      left: clamp(-12px, 3vw, -20px);
      width: 8px;
      height: 8px;
      background-color: ${({ theme: { accent, themes, currentTheme } }) =>
        currentTheme !== themes.dark ? accent.light : accent.dark};
      border-radius: 50%;
      transform: translate(-50%, -50%);

      ${({ theme }) => theme.transition("background-color", "transform")}
    }
  }
`;
