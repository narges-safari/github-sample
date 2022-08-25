import { useMemo } from "react";
import { Repos } from "../Profile.types";
import { useRepositories } from "./Repositories.biz";
import ReposItem from "../../../../components/ReposItem";
import { Button, ButtonGroup, GridItem } from "@chakra-ui/react";

const Repositories = ({
  reposUrl,
  publicRepos,
}: {
  reposUrl: string;
  publicRepos: number;
}) => {
  const { onPaginateClick, repos, pagesCount, currentPage } = useRepositories(
    reposUrl,
    publicRepos
  );

  const renderPagination = useMemo(
    () =>
      Array(pagesCount)
        .fill("")
        .map((_, index) => {
          const _pageNumber = index + 1;
          return (
            <Button
              size={"sm"}
              key={index}
              variant={"outline"}
              colorScheme={"blue"}
              isActive={_pageNumber === currentPage}
              onClick={() => onPaginateClick(_pageNumber)}
            >
              {_pageNumber}
            </Button>
          );
        }),
    [currentPage, onPaginateClick, pagesCount]
  );

  return (
    <>
      {repos?.map((item: Repos) => (
        <GridItem key={item.id}>
          <ReposItem
            name={item.name}
            description={item.description}
            language={item.language}
            isPrivate={item.private}
          />
        </GridItem>
      ))}
      <GridItem>
        <ButtonGroup display={"flex"} justifyContent={"center"}>
          {renderPagination}
        </ButtonGroup>
      </GridItem>
    </>
  );
};

export default Repositories;
