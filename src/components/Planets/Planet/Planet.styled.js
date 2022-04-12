import { Paragraph, Title } from "common";
import styled from "styled-components";

export const PlanetItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 3vw, 12px);
  padding: 12px 16px;
  background-color: ${({
    theme: { themes, currentTheme, bgThird, bgSecond },
  }) => (currentTheme === themes.dark ? bgThird.dark : bgSecond.light)};
  border-radius: 20px;
`;

export const CardPara = styled(Paragraph)`
  /* color: #999; */
`;

export const CardTitle = styled(Title)`
  /* color: #ffff57; */
`;
