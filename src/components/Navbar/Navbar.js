import { Button } from "common";
import { NavbarStyled } from "./Navbar.styled";

export const Navbar = ({ setPage }) => {
  return (
    <NavbarStyled>
      <Button onClick={() => setPage("planets")} type="button">
        Planets
      </Button>

      <Button onClick={() => setPage("people")} type="button">
        People
      </Button>
    </NavbarStyled>
  );
};
