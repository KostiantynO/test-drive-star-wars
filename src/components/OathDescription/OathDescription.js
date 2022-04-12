import { PropTypes } from "common";
import { OathDescriptionStyled } from "./OathDescription.styled";

export const OathDescription = ({ description, ...props }) => {
  return (
    <OathDescriptionStyled {...props}>{description}</OathDescriptionStyled>
  );
};

OathDescription.propTypes = {
  description: PropTypes.string,
};
