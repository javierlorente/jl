import React from "react";
import { connect, styled } from "frontity";

const CommentsList = ({ state, libraries, postId }) => {
  const data = state.source.get(`@comments/${postId}`);
  const Html2React = libraries.html2react.Component;

  return (
    <>
      {data?.items?.map(({ id }) => {
        return (
          <>
            <Comment>
              <Author>
                {state.source.comment[id].author_name || "Anonymous"}:
              </Author>
              <Html2React html={state.source.comment[id].content.rendered} />
            </Comment>
          </>
        );
      })}
    </>
  );
};

export default connect(CommentsList);

const Author = styled.div`
  font-weight: bold;
  margin: 1rem 0;
`;

const Comment = styled.div`
  padding: 1.2rem;
  background-color: var(--color-light2);
  box-shadow: var(--shadow-md);
  margin-bottom: 1.2rem;

  @media (min-width: 700px) {
    padding: 1.6rem 2.4rem;
  }
`;
