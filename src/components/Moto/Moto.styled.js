import { styled, Paragraph } from "common";

export const MotoStyled = styled(Paragraph)`
  color: ${({ theme }) => theme.main.dark};

  .Passion {
    color: ${({ theme }) => theme.colors.passion};
  }
`;
