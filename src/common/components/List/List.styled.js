import { styled } from "common";

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 8px;
  padding: clamp(12px, 3vw, 20px) clamp(4px, 3vw, 12px);
  border-radius: 4px;
`;
