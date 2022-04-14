import { iconPath, PropTypes } from "common";
import { IconStyled } from "./Icon.styled";

export const Icon = ({ icon = "placeholder", children, ...props }) => (
  <IconStyled {...props} icon={icon}>
    <use href={iconPath(icon)} />
    {children}
  </IconStyled>
);

Icon.propTypes = {
  icon: PropTypes.string,
};
