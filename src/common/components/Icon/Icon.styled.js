import { styled } from "common";
export const IconStyled = styled.svg`
  width: ${({ Width }) => (Width ? `${Width}px` : "clamp(24px, 2.1vw, 36px)")};
  height: ${({ Height }) =>
    Height ? `${Height}px` : "clamp(24px, 2.1vw, 36px)"};

  fill: currentColor;
`;
