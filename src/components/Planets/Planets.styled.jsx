import { Title } from "common";
import styled from "styled-components";

export const PlanetList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(4)};
  padding: 0;

  > li {
    flex-basis: 100%;

    @media screen and (min-width: 480px) {
      flex-basis: calc((50% - 12px));
    }

    @media screen and (min-width: 768px) {
      flex-basis: calc((25% - 18px));
    }
  }
`;

export const StyledTitle = styled(Title)`
  margin-bottom: clamp(48px, 5vw, 60px);
  font-size: 1.3rem;
`;

export const StaticPaginationButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;
