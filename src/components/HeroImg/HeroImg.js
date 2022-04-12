import { HeroThumbStyled, HeroImgStyled } from "./HeroImg.styled";

export const HeroThumb = ({ ...props }) => {
  return <HeroThumbStyled {...props} />;
};

export const HeroImg = ({ src, ...props }) => {
  return <HeroImgStyled src={src} {...props} />;
};
