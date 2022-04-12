import { Button, PropTypes } from "common";
import { NameAndProfession, PositionsList } from "components";
import {
  AboutContentStyled,
  AboutContentRowStyled,
} from "./AboutContent.styled";

export const AboutContent = ({
  name,
  profession,
  positions,
  onToggleModal,
  callToAction,
  ...props
}) => {
  return (
    <AboutContentStyled {...props}>
      <NameAndProfession name={name} profession={profession} />
      <PositionsList positions={positions} />
      <Button onClick={onToggleModal}>{callToAction}</Button>
    </AboutContentStyled>
  );
};

AboutContent.propTypes = {
  name: PropTypes.objectOf(PropTypes.string.isRequired),
  profession: PropTypes.string,
  positions: PropTypes.arrayOf(PropTypes.object.isRequired),
  onToggleModal: PropTypes.func,
  callToAction: PropTypes.string,
};

export const AboutContentRow = ({ ...props }) => {
  return <AboutContentRowStyled {...props} />;
};
