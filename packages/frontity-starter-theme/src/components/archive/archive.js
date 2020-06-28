/** @jsx jsx */
import { jsx, Avatar, Flex } from "theme-ui";
import React, { useEffect } from "react";
import { connect } from "frontity";

import ArchiveItem from "./archiveItem";
import Pagination from "./pagination";
import { getUrlData } from "../../helpers";

const Archive = ({ state, showMedia }) => {
  const data = getUrlData(state);
  const author = state.source.author[data.id];

  const homeItems = data.items.filter((item) =>
    state.source.post[item.id].categories.includes(1780)
  );

  const items = data.isHome ? homeItems : data.items;

  // useEffect(() => {
  //   actions.source.fetch("/:category", { force: true });
  // }, []);

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
      <Pagination />
    </>
  );
};

export default connect(Archive);
