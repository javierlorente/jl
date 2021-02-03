/** @jsx jsx */
import { jsx, Flex, ThemeProvider } from "theme-ui";
import theme from "../theme-ui";
import { Global, connect, Head } from "frontity";
import Switch from "@frontity/components/switch";
import FontFace from "../styles/fontFace";
import globalStyles from "../styles/globalStyles";
import Header from "./header";
import Footer from "./footer";
import Archive from "./archive";
import Loading from "./loading";
import Page404 from "./page404";
import Post from "./post";
import { getUrlData } from "../helpers";
import Title from "./title";
import SearchResults from "./search/searchResults";
import CookieNotice from "./cookieNotice";
import { Grommet } from "grommet";

const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = getUrlData(state);
  const metadata = state.headTags.get(state.router.link);
  const { isFetching, isPostType, isArchive, isSearch, isHome } = data;
  const title = isHome ? state.frontity.title : metadata[0]?.content;

  return (
    <Grommet theme={theme}>
      <ThemeProvider theme={theme}>
        <Title />
        <Head>
          <title>{title}</title>
          <meta name="description" content={state.frontity.description} />
          <html lang="es" />
        </Head>
        <FontFace />
        <Global styles={globalStyles} />
        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "100vh",
          }}
        >
          <Header />
          <main
            sx={{
              py: ["xl", "xl", "xxl"],
              form: {
                ...formStyle,
              },
            }}
          >
            <Switch>
              <Loading when={isFetching} />
              <SearchResults when={isSearch} />
              <Archive when={isArchive} />
              <Post when={isPostType} />
              <Page404 />
            </Switch>
          </main>
          <Footer />
        </Flex>
        <CookieNotice />
      </ThemeProvider>
    </Grommet>
  );
};

export default connect(Theme);

const formStyle = {
  '.gform_body ul': {
    listStyle: "none",
    paddingLeft: 0
  },
  'input[type="text"],input[type="email"], input[type="tel"], textarea': {
    border: "none",
    height: 50,
    width: ["100%", "80%"],
    bg: "inputBg",
    borderRadius: 5,
    boxShadow: "default",
    p: 20,
    fontSize: "m",
    color: "text",
    fontFamily: "body",
    mb: 15,
  },
  textarea: {
    height: "auto",
  },
  'input[type="submit"]': {
    variant: "buttons.secondary.gradient",
  },
};
