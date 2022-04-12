import { styled } from "common";

export const ContainerStyled = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: relative; // to bring the text to front
  padding: 0 15px;

  @media screen and (min-width: 1360px) {
    max-width: 1360px;
    padding: 0 95px;
  }
`;
