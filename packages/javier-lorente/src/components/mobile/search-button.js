import { connect } from "frontity";
import { SearchIcon } from "../icons";
import { SearchToggle, ToggleWrapper } from "../navigation/nav-toggle";

const MobileSearchButton = ({ state, actions }) => {
  // Get the state of the search modal
  const { isSearchModalOpen } = state.theme;
  const { openSearchModal } = actions.theme;

  return (
    <ToggleWrapper>
      <SearchToggle
        isMobile
        aria-expanded={isSearchModalOpen}
        onClick={openSearchModal}
        aria-label="Click to open search bar..."
      >
        <SearchIcon />
      </SearchToggle>
    </ToggleWrapper>
  );
};

export default connect(MobileSearchButton);
