/** @jsxImportSource theme-ui */
import { jsx, Flex } from "theme-ui";
import { connect } from "frontity";
import Link from "../link";

const Menu = ({ state, direction, className }) => {
  const { items } = state.source.get("menus/primary");
  return (
    <Flex as="nav" className={className}>
      {items.map(([name, link]) => {
        const isCurrentPage = state.router.link === link;
        return (
          <Link
            key={name}
            link={link}
            className="menu-item"
            aria-current={isCurrentPage ? "page" : undefined}
            sx={{
              fontWeight: 500,
              textTransform: "uppercase",
              fontSize: "xs",
              fontFamily: "bold",
              letterSpacing: 1,
              "&:focus": { outline: "none" },
            }}
          >
            {name}
          </Link>
        );
      })}
    </Flex>
  );
};

export default connect(Menu);
