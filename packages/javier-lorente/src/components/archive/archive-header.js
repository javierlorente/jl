import { styled } from "frontity";
import TaxsMenu from "./taxs-menu";

const Header = ({ title, children }) => {
  return (
    <ArchiveHeader>
      <ArchiveTitle>{title}</ArchiveTitle>
      {children}
      <TaxsMenu />
    </ArchiveHeader>
  );
};

export default Header;

const ArchiveHeader = styled.header`
  padding-top: 4rem;
  text-align: center;
  max-width: var(--container-md);
  margin: 0 auto;

  @media (min-width: 700px) {
    padding-top: 8rem;
  }
`;

const ArchiveTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: -0.026666667em;
  margin: 0 0 2rem;

  @media (min-width: 700px) {
    font-size: 3.2rem;
  }
`;
