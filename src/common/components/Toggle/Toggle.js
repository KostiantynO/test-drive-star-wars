// prettier-ignore
import { useContext, appContext, icons, IconButton, theme, PropTypes } from 'common';
import { ToggleStyled } from "./Toggle.styled";
const { moon, sun } = icons;

//prettier-ignore
const { themes: { dark, light } } = theme;

export const Toggle = ({ onToggleTheme, ...props }) => {
  const { currentTheme } = useContext(appContext);

  return (
    <ToggleStyled {...props}>
      <span>Dark</span>
      <IconButton
        disabled={currentTheme === dark}
        iconLeft={moon}
        name={dark}
        onClick={onToggleTheme}
      />

      <IconButton
        disabled={currentTheme === light}
        iconLeft={sun}
        name={light}
        onClick={onToggleTheme}
      />
      <span>Light</span>
    </ToggleStyled>
  );
};

Toggle.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
};
