import { styled, List } from "common";

export const AchievementsListStyled = styled(List)`
  flex-direction: row;
  gap: 24px;

  padding: 0;

  > li {
    @media screen and (min-width: 480px) {
      flex-basis: calc((50% - 12px));
    }

    @media screen and (min-width: 768px) {
      flex-basis: calc((25% - 18px));
    }
  }

  .AchievementsItemHeader {
    margin-bottom: 4px;
  }

  .AchievementsIcon.AchievementsIcon {
    color: ${({ theme: { themes, accent, currentTheme } }) =>
      currentTheme !== themes.dark ? accent.light : accent.dark};

    width: clamp(50px, 9vw, 60px);
    height: clamp(50px, 9vw, 60px);
    margin-bottom: clamp(16px, 3vw, 32px);

    :hover,
    :focus {
      color: ${({ theme: { themes, accent, currentTheme } }) =>
        currentTheme !== themes.dark ? accent.dark : accent.light};

      ${({ theme }) => theme.transition("color")}
    }
  }
`;
