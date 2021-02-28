import { connect, styled } from "frontity";
import { SearchIcon } from "../icons";
import { BaseToggle, ToggleWrapper } from "../navigation/nav-toggle";

const SearchButton = ({ state, actions }) => {
  // Get the state of the search modal
  const { isSearchModalOpen } = state.theme;
  const { openSearchModal } = actions.theme;

  return (
    <ToggleWrapper>
      <BaseToggle
        aria-expanded={isSearchModalOpen}
        onClick={openSearchModal}
        aria-label="Click to open search bar..."
        style={{ marginTop: "-0.1rem" }}
      >
        <SearchIcon />
      </BaseToggle>
    </ToggleWrapper>
  );
};

export default connect(SearchButton);
