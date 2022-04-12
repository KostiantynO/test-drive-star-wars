import { styled, Section } from "common";

export const AboutSectionStyled = styled(Section)`
  contain: strict;
  position: relative; // for Darth Vader absolute
  overflow: hidden;

  padding-top: 0;
  padding-bottom: 60px;
  background-attachment: fixed;
  background-size: cover;

  background-color: ${({ theme: { themes, bgSecond, currentTheme } }) =>
    currentTheme === themes.dark ? bgSecond.dark : bgSecond.light};

  background-image: ${({ theme: { themes, bgMain, currentTheme } }) =>
    `url(${
      currentTheme === themes.dark ? bgMain.bgImage.dark : bgMain.bgImage.light
    })`};
`;
