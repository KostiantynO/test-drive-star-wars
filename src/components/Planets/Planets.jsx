import { Planet } from "./Planet";
import {
  PlanetList,
  StyledTitle,
  StaticPaginationButtonsContainer,
} from "./Planets.styled";
import { Button } from "common";
import { useCustomQuery } from "hooks";
import { Pagination } from "./Pagination";
import styled from "styled-components";

const fetchPlanets = async ({ queryKey: [key, page] }) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

const PlanetsContainer = styled.div`
  width: 100%;
`;

// const collator = new Intl.Collator(undefined, {
//   sensitivity: 'base',
//   numeric: true,
// });

const comparePopulation = (a, b) => {
  if (isNaN(a.population)) return 1;
  if (isNaN(b.population)) return -1;
  return b.population - a.population;
};

export const Planets = () => {
  const {
    data,
    page,
    lastPage,
    setPage,
    isError,
    isLoading,
    isSuccess,
    isPrevButtonDisabled,
    isNextButtonDisabled,
    setPrevPage,
    setNextPage,
    setLastPage,
  } = useCustomQuery("planets", fetchPlanets);

  return (
    <PlanetsContainer>
      <StyledTitle h="3" title="Planets" />

      <StaticPaginationButtonsContainer>
        <Button secondary onClick={() => setPage(1)}>
          page 1
        </Button>

        <Button secondary onClick={() => setPage(2)}>
          page 2
        </Button>

        <Button secondary onClick={() => setPage(3)}>
          page 3
        </Button>
      </StaticPaginationButtonsContainer>

      {isLoading && (
        <div>Loading data ... (https://swapi.dev/api/planets/)</div>
      )}

      {isError && <div>Error fetching data</div>}

      {isSuccess && (
        <>
          <Pagination
            page={page}
            lastPage={lastPage}
            setPrevPage={setPrevPage}
            setNextPage={setNextPage}
            setLastPage={setLastPage}
            isPrevButtonDisabled={isPrevButtonDisabled}
            isNextButtonDisabled={isNextButtonDisabled}
          />

          <PlanetList>
            {data?.results?.sort(comparePopulation).map((planet) => (
              <Planet key={planet.name} planet={planet} />
            ))}
          </PlanetList>
        </>
      )}
    </PlanetsContainer>
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
