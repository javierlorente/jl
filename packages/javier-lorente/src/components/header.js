import { connect, styled } from "frontity";
import Link from "./link";
import Navigation from "./navigation/navigation";
import SearchButton from "./search/search-button";
import SearchModal from "./search/search-modal";
import MobileSearchButton from "./mobile/search-button";
import MobileMenuButton from "./mobile/menu-button";
import MobileMenuModal from "./mobile/menu-modal";
import Logo from "./logo";

const Header = ({ state }) => (
  <PageHeader id="site-header">
    <HeaderInner>
      {/* Search button on mobile */}
      {state.theme.showSearchInHeader && <MobileSearchButton />}

      {/* Brand site */}
      <LogoStyled />

      {/* Mobile menu button and modal */}
      <MobileMenuButton />
      <MobileMenuModal />

      <HeaderNavigationWrapper>
        {/* Desktop navigation links */}
        <Navigation />
        {/* Desktop search button */}
        {state.theme.showSearchInHeader && <SearchButton />}
      </HeaderNavigationWrapper>
    </HeaderInner>
    {/* Global search modal */}
    <SearchModal />
  </PageHeader>
);

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const LogoStyled = styled(Logo)`
  margin: 0 auto;
  @media (min-width: 1000px) {
    margin-left: 0;
  }
`;

const HeaderLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
`;

const PageHeader = styled.header`
  z-index: 1;
  background-color: var(--color-dark);
  color: var(--color-light);
  position: relative;
`;

const HeaderInner = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: 2rem 0;
  max-width: var(--container-lg);
  z-index: 100;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 700px) {
    width: calc(100% - 8rem);
  }
  @media (min-width: 1000px) {
    display: flex;
    justify-content: space-between;
  }
`;

const HeaderNavigationWrapper = styled.div`
  display: none;

  @media (min-width: 1000px) {
    align-items: center;
    display: flex;
  }
`;
