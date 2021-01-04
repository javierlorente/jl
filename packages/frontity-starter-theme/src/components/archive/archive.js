/** @jsx jsx */
import { jsx, Avatar, Flex, Container } from "theme-ui";
import React, {useEffect} from "react";
import { decode, connect } from "frontity";
import ArchiveItem from "./archiveItem";
import { getUrlData } from "../../helpers";
import Link from "../link";

const TaxsMenu = connect(({ state, actions }) => {
  const data = getUrlData(state);
  let taxs = null;

  useEffect(() => {
    actions.source.fetch("taxs-menu/"+ data.id)
  }, [data.id])

  if(data.id) {
    taxs = state.source.get("taxs-menu/"+ data.id);
  }

  if(taxs && taxs.isReady) {
    return (
      <Container sx={{ maxWidth: "l", my: 40 }}>
        <Flex
          as="nav"
          className="taxMenu"
          sx={{
            justifyContent: "center",
            mt: 50,
            bg: "cardBg",
            py: 20,
            boxShadow: "small",
            a: { textTransform: "uppercase", fontSize: "xs", px: 15 },
          }}
        >
          {taxs.items.map( (item, i) => {
            const { url, title } = item.menu_item;
            if(!url || !title) {
              return null
            }
            const { backend } = state.frontity;
            const cleanUrl = url?.replace(backend, "");

            return (
                  <Link key={i} link={`/${cleanUrl}`}>
                    {decode(title)}
                  </Link>
            )
          })}
        </Flex>
    </Container>
    )
  }
  
  return null

})
const Archive = ({ state, actions, showMedia }) => {
  const data = getUrlData(state);
  const author = state.source.author[data.id];

  const allCats = state.source.get("all-categories").items;
  const currentCat = allCats.filter((cat) => cat.link.includes(data.link));

  const items = data.items;

  return (
    <>
      {data.isTaxonomy && (
        <h3
          className="archiveTitle"
          sx={{
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: 1.2,
            mb: 30,
          }}
        >
          {state.source[data.taxonomy][data.id].name}
        </h3>
      )}
      {data.isTaxonomy && (
        <Container sx={{ maxWidth: "l", my: 40 }}>
          <p sx={{ textAlign: "center" }}>{currentCat[0].description}</p>
          <TaxsMenu />
        </Container>
      )}

      {data.isAuthor && (
        <Flex sx={{ justifyContent: "center", mb: 30 }}>
          <Avatar
            src={author.avatar_urls[48]}
            sx={{ width: 50, height: 50, mr: 25 }}
          />
          <h3
            className="archiveTitle"
            sx={{ textTransform: "uppercase", letterSpacing: 1.2 }}
          >
            {" "}
            {author.name}
          </h3>
        </Flex>
      )}

      {items.map(({ id, type }) => {
        const item = state.source[type][id];
        return (
          <ArchiveItem
            key={item.id}
            item={item}
            type={data.type}
            showMedia={showMedia}
          />
        );
      })}
      {/* <Pagination /> */}
    </>
  );
};

export default connect(Archive);
