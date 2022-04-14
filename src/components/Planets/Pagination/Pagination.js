import { Button, Paragraph } from "common";
import React from "react";
import { PaginationContainer } from "../Planets.styled";

export const Pagination = ({
  page,
  lastPage,
  setPrevPage,
  setNextPage,
  setLastPage,
  isPrevButtonDisabled,
  isNextButtonDisabled,
}) => {
  return (
    <PaginationContainer>
      <Button secondary onClick={setPrevPage} disabled={isPrevButtonDisabled}>
        Previous page
      </Button>

      <Paragraph> {page} </Paragraph>

      <Button secondary onClick={setNextPage} disabled={isNextButtonDisabled}>
        Next page
      </Button>

      <Button secondary onClick={setLastPage} disabled={isNextButtonDisabled}>
        {lastPage}
      </Button>
    </PaginationContainer>
  );
};
