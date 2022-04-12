import { LinkStyled } from "./Link.styled";

export const Link = ({ link, ...props }) => {
  return <LinkStyled href={link} {...props} />;
};
