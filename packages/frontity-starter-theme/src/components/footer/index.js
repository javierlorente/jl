import { jsx, Container, Flex } from "theme-ui";
import SocialShare from "../socialShare";
import { connect } from "frontity";
import Link from "../link";

const Footer = ({ state }) => {
  const { items } = state.source.get("menus/secondary");
  return (
    <footer sx={{ variant: "footer" }}>
      <Container>
        <Flex
          sx={{
            flexDirection: ["column", "row"],
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>&copy; {new Date().getFullYear()} Javier Lorente</p>
          <Flex
            sx={{
              gap: "m",
              flexWrap: "wrap",
              justifyContent: ["center", "space-between"],
            }}
          >
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
                    letterSpacing: 0.3,
                    "&:focus": { outline: "none" },
                  }}
                >
                  {name}
                </Link>
              );
            })}
          </Flex>
        </Flex>
        {state.theme.showSocialLinks.footer && <SocialShare />}
      </Container>
    </footer>
  );
};

export default connect(Footer);
