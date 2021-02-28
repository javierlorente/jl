import { useEffect } from "react";
import { connect, styled, css } from "frontity";
import Link from "../link";

const paginate = (totalPages, currentPage) => {
  const delta = 1;
  const pagination = [];

  // Push items from "current - 1" (if available) to current + 1 (if available)
  for (
    let i = Math.max(2, currentPage - delta);
    i <= Math.min(totalPages - 1, currentPage + delta);
    i++
  ) {
    // if current = 1, total = 7, pagination[] => [2]
    // if current = 5, total = 7, pagination[] => [4, 5, 6];
    // current = 7, total = 7, pagination[] => [6];
    pagination.push(i);
  }

  // if 3 or more pages exist before current page
  //  items from 2 to current - 2 will be "..."
  if (currentPage - delta > 2) {
    // add "..." to the beginning
    pagination.unshift("...");
  }

  // if 3 or more exists after current page
  // items from current + 2 to lastPage(totalPage) - 1 will be "..."
  if (currentPage + delta < totalPages - 1) {
    // add "..." to the end
    pagination.push("...");
  }

  // Always add 1 (first page) to the beginning
  pagination.unshift(1);
  // Always add totalPage (last page) to the end
  pagination.push(totalPages);

  return pagination;
};

const Pagination = ({ state, actions, libraries }) => {
  const { route, query, totalPages, next, previous, page } = state.source.get(
    state.router.link
  );

  // get page link with page number
  const getPageLink = (page) =>
    libraries.source.stringify({ route, query, page });

  // Pagination - array of numbers/dots for pages
  const paginationArray = paginate(totalPages, page);

  // Prefetch next page if it hasn't been fetched yet.
  useEffect(() => {
    if (next) actions.source.fetch(next);
  }, []);

  return (
    <Container>
      <Direction>
        {previous && <PagingLink link={previous}>← Siguiente</PagingLink>}
      </Direction>

      <div css={inlineBlock}>
        <PagingList>
          {paginationArray.map((item, index) => {
            // if item is dots, "..."
            if (item === "...") {
              return <PagingItem key={index}>{`...`}</PagingItem>;
            }

            // if item is current page
            if (item === page) {
              return <PagingItem key={index}>{item}</PagingItem>;
            }

            return (
              <PagingItem key={index}>
                <PagingLink link={getPageLink(item)}>{item}</PagingLink>
              </PagingItem>
            );
          })}
        </PagingList>
      </div>

      <Direction>
        {next && <PagingLink link={next}>Anterior →</PagingLink>}
      </Direction>
    </Container>
  );
};

const PagingLink = styled(Link)`
  color: var(--color-dark);
`;
const inlineBlock = css`
  display: inline-block;
`;

const Container = styled.div`
  font-size: 1em;
  line-height: 30px;
  width: calc(100% - 4rem);
  padding-bottom: 2rem;
  text-align: center;
  max-width: var(--container-md);
  margin: 0 auto;

  @media (min-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 8rem);
    font-size: 1.3em;
    font-weight: bold;
    padding-bottom: 4rem;
  }
`;

const PagingList = styled.ul`
  list-style: none;
  margin: 0 2rem;
`;

const PagingItem = styled.li`
  display: inline-block;
  margin: 0;
  color: rgba(0, 0, 0, 0.45);

  &:not(:last-of-type) {
    margin-right: 2rem;
  }
`;

const Direction = styled.div`
  display: inline-block;
`;

export default connect(Pagination);
