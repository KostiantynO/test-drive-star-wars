import { Icon } from "common";
import { IconButtonStyled } from "./IconButton.styled";

export const IconButton = ({ iconLeft, iconRight, children, ...props }) => {
  return (
    <IconButtonStyled {...props}>
      {iconLeft && <Icon icon={iconLeft} />}
      {children}
      {iconRight && <Icon icon={iconRight} />}
    </IconButtonStyled>
  );
};
