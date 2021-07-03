import React, { useEffect } from "react";
import { decode, connect, styled } from "frontity";
import Link from "../link";

const TaxsMenu = ({ state, actions }) => {
  const { id } = state.source.get(state.router.link);
  const taxs = state.source.get("taxs-menu/" + id);

  useEffect(() => {
    if(id) {
      actions.source.fetch("taxs-menu/" + id);
    }
  }, [id]);

  if (taxs && taxs.isReady) {
    return (
      <Container>
        <Nav>
          {taxs.items?.map((item, i) => {
            const { url, title } = item.menu_item;
            if (!url || !title) {
              return null;
            }
            const { backend } = state.frontity;
            const cleanUrl = url?.replace(backend, "");

            return (
              <LinkStyled key={i} link={`/${cleanUrl}`}>
                {decode(title)}
              </LinkStyled>
            );
          })}
        </Nav>
      </Container>
    );
  }

  return null;
};

export default connect(TaxsMenu);

const LinkStyled = styled(Link)`
  font-size: 1.4rem;
  letter-spacing: 0.03rem;
  text-transform: uppercase;
  color: inherit;
  font-weight: bold;
  &:hover {
    color: var(--color-primary);
  }
`;
const Container = styled.div`
  box-shadow: var(--shadow-md);
  background-color: var(--color-light2);
  padding: 2rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2.4rem;
  justify-content: center;
  flex-wrap: wrap;
`;
