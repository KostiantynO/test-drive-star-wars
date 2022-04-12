// prettier-ignore
import { PropTypes, Icon, Title, Paragraph, Link } from 'common';
import { ItemStyled } from "./Item.styled";

export const Item = ({
  hasIcons,
  titleClass,
  item: { text, link, rel, icon, category, description },
  children,
  social,
  ...props
}) => {
  return (
    <ItemStyled {...props}>
      {!social && hasIcons && icon && (
        <Icon className={hasIcons.iconClass} icon={icon} />
      )}
      {hasIcons && category && (
        <Title className={titleClass} title={category} h="3" />
      )}
      {hasIcons && description && <Paragraph>{description}</Paragraph>}

      {social && hasIcons && icon && (
        <Link link={link} rel={rel}>
          <Icon className={hasIcons.iconClass} icon={icon} />
        </Link>
      )}

      {text && <Paragraph>{text}</Paragraph>}
      {children && <Paragraph>{children}</Paragraph>}
    </ItemStyled>
  );
};

Item.propTypes = {
  hasIcons: PropTypes.object,
  item: PropTypes.object.isRequired,
  titleClass: PropTypes.string,
};
