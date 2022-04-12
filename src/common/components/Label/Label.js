import { PropTypes } from "common";
import { LabelStyled } from "./Label.styled";

export const Label = ({ label, children, ...props }) => {
  return (
    <LabelStyled {...props}>
      <span>{label}</span>
      {children}
    </LabelStyled>
  );
};

Label.propTypes = {
  label: PropTypes.string.isRequired,
};
