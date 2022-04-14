import {
  PlanetList,
  StaticPaginationButtonsContainer,
  StyledTitle,
} from "components/Planets";
import { Person } from "./Person";
import { useCustomQuery } from "hooks";
import { Pagination } from "components/Planets/Pagination";
import styled from "styled-components";
import { Button } from "common";

const fetchPeople = async ({ queryKey: [key, page] }) => {
  const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  return res.json();
};

const PeopleContainer = styled.div`
  width: 100%;
`;

export const People = () => {
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
  } = useCustomQuery("people", fetchPeople);

  return (
    <PeopleContainer>
      <StyledTitle h="3" title="People" />

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

      {isLoading && <div>Loading data ... (https://swapi.dev/api/people/)</div>}

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
            {data?.results
              ?.sort((a, b) => b.population - a.population)
              .map((person) => (
                <Person key={person.name} person={person} />
              ))}
          </PlanetList>
        </>
      )}
    </PeopleContainer>
  );
};
