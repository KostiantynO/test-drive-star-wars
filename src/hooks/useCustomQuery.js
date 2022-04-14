import { useState } from "react";
import { useQuery } from "react-query";

export const useCustomQuery = (key, fn) => {
  const [page, setPage] = useState(1);

  const { data, status } = useQuery([key, page], fn, {
    keepPreviousData: true,
  });
  const isError = status === "error";
  const isLoading = status === "loading";
  const isSuccess = status === "success";

  const isPrevButtonDisabled = page === 1;
  const isNextButtonDisabled = !data || !data.next;

  const setPrevPage = () => setPage((old) => Math.max(old - 1, 1));

  // next: 'https://swapi.dev/api/people/?page=2';
  const setNextPage = () =>
    setPage((old) => (!data || !data?.next ? old : old + 1));

  const lastPage = Math.ceil(data?.count / 10) || 1;
  const setLastPage = () => setPage(lastPage);

  return {
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
  };
};
