import { PlanetItem, CardPara, CardTitle } from "./Planet.styled";

const formatter = new Intl.NumberFormat("en-US", {
  // notation: 'compact',
}).format;

const formatNumber = (number) =>
  !isNaN(Number(number)) ? formatter(number) : number;

export const Planet = ({ planet: { name, population, terrain } }) => {
  const populationFormatted = formatNumber(population);

  return (
    <PlanetItem>
      <CardTitle h="3">{name}</CardTitle>
      <CardPara>Population - {populationFormatted}</CardPara>
      <CardPara>Terrain - {terrain}</CardPara>
    </PlanetItem>
  );
};
