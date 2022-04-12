import styled from "styled-components";
import { Container, Section } from "common";

export const PlanetsSection = styled(Section)`
  background-color: ${({ theme: { themes, bgMain, currentTheme } }) =>
    currentTheme === themes.dark ? bgMain.dark : bgMain.light};
  height: unset;
  min-height: 100%;
`;

export const PlanetsContainer = styled(Container)`
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing(6)};
`;

export const StarWarsInfoTitle = styled.h2`
  /* accent-text */
  font-size: clamp(1.5rem, 5vw, ${({ theme }) => theme.text.accent.fontSize});
  font-style: ${({ theme }) => theme.text.accent.fontStyle};
  font-weight: ${({ theme }) => theme.text.accent.fontWeight};
  line-height: ${({ theme }) => theme.text.accent.lineHeight};
  letter-spacing: ${({ theme }) => theme.text.accent.letterSpacing};
  color: ${({ theme: { themes, accent, currentTheme } }) =>
    currentTheme !== themes.dark ? accent.light : accent.dark};
  text-align: center;

  ${({ theme }) => theme.transition("color")}
`;
