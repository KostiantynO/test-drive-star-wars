import { PropTypes } from "common";
import { ParagraphStyled } from "./Paragraph.styled";

export const Paragraph = ({
  text,
  passion,
  passionClass,
  children,
  ...props
}) => {
  return (
    <ParagraphStyled {...props}>
      {text && <span>{text}</span>}
      {passion && <span className={passionClass}>{passion}</span>}
      {children}
    </ParagraphStyled>
  );
};

Paragraph.propTypes = {
  text: PropTypes.string,
};
