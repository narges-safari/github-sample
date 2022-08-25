import { useEffect, useState } from "react";
import type { Repos } from "../Profile.types";

const itemPerPage = 6;

export const useRepositories = (reposUrl: string, publicRepos: number) => {
  const [repos, setRepos] = useState<Repos[]>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pagesCount: number = Math.ceil(publicRepos / 6);

  useEffect(() => fetchRepositories(1), []);

  const onPaginateClick = (page: number) => {
    setCurrentPage(page);
    fetchRepositories(page);
  };

  const fetchRepositories = (_page: number = 1) => {
    fetch(
      `${reposUrl}?sort=updated&per_page=${itemPerPage}&page=${_page}`
    ).then(async (response: Response) => {
      const repos = await response.json();
      setRepos(repos);
    });
  };

  return {
    repos,
    pagesCount,
    currentPage,
    onPaginateClick,
  };
};
