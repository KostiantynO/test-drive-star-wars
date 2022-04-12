import { styled } from "common";

export const AboutContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: clamp(16px, 3vw, 24px);
`;

export const AboutContentRowStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
`;
