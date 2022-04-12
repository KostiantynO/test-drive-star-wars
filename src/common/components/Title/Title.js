import { PropTypes } from "common";
import { H1Styled, H2Styled, H3Styled } from "./Title.styled";

export const Title = ({ title, children, h = "2", ...props }) => {
  switch (h) {
    case "1":
      return (
        <H1Styled {...props}>
          {title && <span>{title}</span>}
          {children}
        </H1Styled>
      );

    case "3":
      return (
        <H3Styled {...props}>
          {title && <span>{title}</span>}
          {children}
        </H3Styled>
      );

    default:
      return (
        <H2Styled {...props}>
          {title && <span>{title}</span>}
          {children}
        </H2Styled>
      );
  }
};

Title.propTypes = {
  title: PropTypes.string,
  h: PropTypes.string,
};
