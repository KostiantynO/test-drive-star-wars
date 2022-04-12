import { styled } from "common";

export const SectionStyled = styled.section`
  width: 100%;
  height: 100%;
  padding: clamp(20px, 3vw, 32px) 0;

  ${({ theme }) => theme.transition("background")}
`;
