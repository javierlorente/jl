import { connect, styled } from "frontity";
import Link from "./link";

const Footer = ({ state }) => {
  const { items } = state.source.get("menus/secondary");
  return (
    <PageFooter>
      <InnerFooter>
        <Copy>&copy; {new Date().getFullYear()} Javier Lorente</Copy>
        <Nav>
          {items.map(([name, link]) => {
            const isCurrentPage = state.router.link === link;
            return (
              <Link
                key={name}
                link={link}
                className="menu-item"
                aria-current={isCurrentPage ? "page" : undefined}
              >
                {name}
              </Link>
            );
          })}
        </Nav>
      </InnerFooter>
    </PageFooter>
  );
};

export default connect(Footer);

const Copy = styled.p`
  font-size: 1.5rem;
  opacity: 0.6;
  @media (min-width: 1000px) {
    margin: 0;
  }
`;
const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2.4rem;
  row-gap: 1rem;

  a {
    font-size: 1.4rem;
    letter-spacing: 0.03rem;
    text-transform: uppercase;
    color: inherit;
    &:hover {
      color: var(--color-primary);
    }
  }

  @media (min-width: 1000px) {
    justify-content: flex-end;
  }
`;

const PageFooter = styled.footer`
  background-color: var(--color-dark);
  color: var(--color-light);
`;

const InnerFooter = styled.div`
  padding: 4rem 2rem;
  max-width: var(--container-lg);
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1000px) {
    padding: 4rem 0;
    width: calc(100% - 8rem);
    display: flex;
    justify-content: space-between;
  }
`;
