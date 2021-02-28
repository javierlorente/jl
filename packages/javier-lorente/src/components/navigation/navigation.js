import { connect, styled } from "frontity";
import Link from "../link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Navigation = ({ state }) => {
  const { items } = state.source.get("menus/primary");

  return (
    <MenuNav>
      <Menu>
        {items.map(([name, link]) => {
          // Check if the link matched the current page url
          const isCurrentPage = state.router.link === link;
          return (
            <MenuItem key={name}>
              {/* If link url is the current page, add `aria-current` for a11y */}
              <MenuLink
                link={link}
                aria-current={isCurrentPage ? "page" : undefined}
              >
                {name}
              </MenuLink>
            </MenuItem>
          );
        })}
      </Menu>
    </MenuNav>
  );
};

export default connect(Navigation);

const MenuNav = styled.nav`
  display: none;
  @media (min-width: 1000px) {
    display: block;
    width: 100%;
  }
`;

const Menu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
`;

const MenuItem = styled.li`
  margin: 0;
`;

const MenuLink = styled(Link)`
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: inherit;
  padding: 0 1rem;
  &:hover {
    color: var(--color-primary);
  }
`;
