/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Container } from "theme-ui";
import React, { useEffect } from "react";
import { decode, connect } from "frontity";
import { getUrlData } from "../../helpers";
import Link from "../link";

const TaxsMenu = ({ state, actions }) => {
  const data = getUrlData(state);
  let taxs = null;

  useEffect(() => {
    actions.source.fetch("taxs-menu/" + data.id);
  }, [data.id]);

  if (data.id) {
    taxs = state.source.get("taxs-menu/" + data.id);
  }

  if (taxs && taxs.isReady) {
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
          {taxs.items.map((item, i) => {
            const { url, title } = item.menu_item;
            if (!url || !title) {
              return null;
            }
            const { backend } = state.frontity;
            const cleanUrl = url?.replace(backend, "");

            return (
              <Link key={i} link={`/${cleanUrl}`}>
                {decode(title)}
              </Link>
            );
          })}
        </Flex>
      </Container>
    );
  }

  return null;
};

export default connect(TaxsMenu);
