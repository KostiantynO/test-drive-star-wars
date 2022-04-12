import { PropTypes } from "common";
import { PositionsListStyled } from "./PositionsList.styled";

export const PositionsList = ({ positions, ...props }) => {
  return <PositionsListStyled items={positions} {...props} />;
};

PositionsList.propTypes = {
  positions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string,
    })
  ).isRequired,
};
