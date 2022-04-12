import { Title } from "common";

import { NameAndProfessionStyled } from "./NameAndProfession.styled";
export const NameAndProfession = ({ name, profession, ...props }) => {
  return (
    <NameAndProfessionStyled {...props}>
      <Title title={profession} />

      <Title h="1">
        <span>{name.sithName}</span>
        <br />
        <span>{name.realName}</span>
      </Title>
    </NameAndProfessionStyled>
  );
};
