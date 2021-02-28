import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import CommentsList from "./comments-list";
import CommentsForm from "./comments-form";

const Comments = ({ actions, state, postId }) => {
  useEffect(() => {
    actions.source.fetch(`@comments/${postId}`);
  }, []);
  const data = state.source.get(`@comments/${postId}`);

  return (
    data.isReady && (
      <Container>
        <CommentsForm postId={postId} />
        <CommentsList postId={postId} />
      </Container>
    )
  );
};

export default connect(Comments);

const Container = styled.div`
  width: 100%;
  margin: 0 auto 2rem;
  max-width: var(--container-md);
`;
