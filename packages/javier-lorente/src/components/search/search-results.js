import { connect, styled } from "frontity";
import Archive from "../archive";
import ArchiveHeader from "../archive/archive-header";
import SectionContainer from "../styles/section-container";
import SearchForm from "./search-form";

const reverseFormat = (query) => query.replace("+", " ");

const SearchResults = ({ state }) => {
  const { primary } = state.theme.colors;

  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  // data.total → total pages that match the current path/url
  // data.searchQuery → query done to get search results
  const { total, searchQuery } = data;
  const isEmpty = data.total === 0;

  return (
    <>
      <ArchiveHeader label="Search" labelColor={primary}>
        <Title>{`Resultados para: “${reverseFormat(searchQuery)}”`}</Title>
        <IntroText size="thin">
          {isEmpty ? (
            <Text>No hemos encontrado resultados para tu busqueda.</Text>
          ) : (
            <Text>
              Se {total === 1 ? "ha" : "han"} encontrado {total}
              {total === 1 ? " resulto" : " resultados"} para tu busqueda.
            </Text>
          )}
        </IntroText>
      </ArchiveHeader>

      {!isEmpty && <Archive showExcerpt={true} showMedia={false} />}
    </>
  );
};

export default connect(SearchResults);

const Title = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
`;
const IntroText = styled(SectionContainer)`
  width: 100%;
  margin-top: 2rem;
  font-weight: initial;

  @media (min-width: 700px) {
    font-size: 2rem;
    margin-top: 2.5rem;
  }
`;

const Text = styled.p`
  margin: 0 0 1em 0;
  &:last-child {
    margin-bottom: 0;
  }
`;

const SearchContainer = styled(SectionContainer)`
  padding-top: 2rem;
  @media (min-width: 700px) {
    padding-top: 4rem;
  }
`;
