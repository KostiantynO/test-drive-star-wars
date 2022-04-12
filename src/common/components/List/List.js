import { PropTypes } from "common";
import { ListStyled } from "./List.styled";
import { Item } from "./Item";

export const List = ({
  items = [{}],
  hasIcons,
  titleClass,
  ordered,
  social,
  ...props
}) => {
  return (
    <ListStyled {...props}>
      {items.map((item, idx) => (
        <Item
          titleClass={titleClass}
          hasIcons={hasIcons}
          key={item?.id ? item.id : idx}
          item={item}
          social={social}
        />
      ))}
    </ListStyled>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasIcons: PropTypes.object,
  ordered: PropTypes.bool,
  social: PropTypes.bool,
  titleClass: PropTypes.string,
};
