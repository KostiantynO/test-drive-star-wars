import { styled, Section } from "common";

export const AchievementsSectionStyled = styled(Section)`
  contain: content;

  width: unset;
  height: unset;

  padding: clamp(30px, 3vw, 60px) 0;

  background-color: ${({ theme: { themes, bgSecond, currentTheme } }) =>
    currentTheme !== themes.dark ? bgSecond.light : bgSecond.dark};
`;
