import { Link } from "common";
import { CardPara, CardTitle, PlanetItem } from "components/Planets/Planet";

export const Person = ({ person: { name, gender, birth_year, url } }) => {
  return (
    <PlanetItem>
      <CardTitle h="3">
        <Link link={url}>{name}</Link>
      </CardTitle>

      <CardPara>Gender - {gender}</CardPara>
      <CardPara>Birth year - {birth_year}</CardPara>
    </PlanetItem>
  );
};
