import { styled } from "common";

export const HeaderStyled = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  padding: 32px 0 clamp(40px, 7vw, 72px);
`;
