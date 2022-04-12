import { useQuery } from "react-query";
import { Planet } from "./Planet";
import { PlanetList, StyledTitle } from "./Planets.styled";

const fetchPlanets = async () => {
  const res = await fetch("https://swapi.dev/api/planets/");
  return res.json();
};

export const Planets = () => {
  const { data, status } = useQuery("planets", fetchPlanets);

  const isError = status === "error";
  const isLoading = status === "loading";
  const isSuccess = status === "success";

  return (
    <div>
      <StyledTitle h="3" title="Planets" />
      {isLoading && (
        <div>Loading data ... (from https://swapi.dev/api/planets/)</div>
      )}

      {isError && <div>Error fetching data</div>}

      {isSuccess && (
        <PlanetList>
          {data?.results
            ?.sort((a, b) => b.population - a.population)
            .map((planet) => (
              <Planet key={planet.name} planet={planet} />
            ))}
        </PlanetList>
      )}
    </div>
  );
};

/*
climate: "arid"
created: "2014-12-09T13:50:49.641000Z"
diameter: "10465"
edited: "2014-12-20T20:58:18.411000Z"
films: ["https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/3/", "https://swapi.dev/api/films/4/",…]
gravity: "1 standard"
name: "Tatooine"
orbital_period: "304"
population: "200000"
residents: ["https://swapi.dev/api/people/1/", "https://swapi.dev/api/people/2/",…]
rotation_period: "23"
surface_water: "1"
terrain: "desert"
url: "https://swapi.dev/api/planets/1/"
*/
