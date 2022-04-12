import { Icon } from "common";
import { LogoStyled } from "./Logo.styled";

export const Logo = ({ icon, ...props }) => {
  return (
    <LogoStyled {...props}>
      <Icon icon={icon}></Icon>
    </LogoStyled>
  );
};
