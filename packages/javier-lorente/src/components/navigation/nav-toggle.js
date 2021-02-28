import { styled, css } from "frontity";

// Base styling for all toggle buttons
export const BaseToggle = styled.button`
  appearance: none;
  color: inherit;
  cursor: pointer;
  font-family: inherit;
  position: relative;
  text-align: inherit;
  user-select: none;
  background: none;
  border: none;
  box-shadow: none;
  border-radius: 0;
  font-size: inherit;
  font-weight: 400;
  letter-spacing: inherit;
  padding: 0;
  text-transform: none;
  align-items: center;
  display: flex;
  overflow: visible;
  padding: 0 2rem;
  color: inherit;

  @media (min-width: 1220px) {
    padding: 0 4rem;
  }

  @media (min-width: 1000px) {
    padding: 0 3rem;
    position: relative;
    bottom: auto;
    left: auto;
    right: auto;
    top: auto;
    width: auto;
    ${(props) =>
      props.isMobile &&
      css`
        display: none !important;
      `}
  }
  &:focus:not(:focus-visible) {
    outline: 0;
  }
  svg {
    min-width: 1.5rem;
  }
`;

// Used for the menu toggle button on Mobile
export const NavToggle = styled(BaseToggle)``;

export const CloseNavToggle = styled(BaseToggle)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  color: #000000;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 3.1rem 0;

  @media (max-width: 700px) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  svg {
    height: 1.6rem;
    width: 1.6rem;
    fill: currentColor;
  }

  > span {
    margin-right: 1.6rem;
  }
`;

// Used for the search toggle button on Mobile
export const SearchToggle = styled(BaseToggle)``;

export const ToggleInner = styled.span``;

export const ToggleText = styled.span``;

// This wraps each toggle button
export const ToggleWrapper = styled.div`
  /* @media (min-width: 1000px) {
    position: relative;
  }

  &:only-child::before {
    background-color: #dcd7ca;

    @media (min-width: 1000px) {
      background: #dedfdf;
      content: "";
      display: block;
      height: 2.7rem;
      position: absolute;
      left: 0;
      top: calc(50% - 1.35rem);
      width: 0.1rem;
    }

    @media (min-width: 1000px) {
      content: "";
    }
  } */
`;
