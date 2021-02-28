import React from "react";
import { connect, styled } from "frontity";
import Loading from "../loading";
import Button from "../styles/button";

const CommentsForm = ({ actions, state, postId }) => {
  const form = state.comments.forms[postId];
  return (
    <>
      <h2>Comentarios</h2>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          actions.comments.submit(postId);
        }}
      >
        {/* If the form is submitting, we can show some kind of a loading state */}
        {form?.isSubmitting && <Loading />}

        <label>
          <input
            type="text"
            name="author_name"
            onChange={(e) =>
              actions.comments.updateFields(postId, {
                authorName: e.target.value,
              })
            }
            value={state.comments.forms[postId]?.fields?.authorName || ""}
            placeholder="Nombre"
          />
          {form?.errors?.authorName}
        </label>

        <label>
          <input
            type="email"
            name="author_email"
            onChange={(e) =>
              actions.comments.updateFields(postId, {
                authorEmail: e.target.value,
              })
            }
            value={state.comments.forms[postId]?.fields?.authorEmail || ""}
            placeholder="Email"
          />
          {form?.errors?.authorEmail}
        </label>

        <label>
          <textarea
            name="content"
            rows="4"
            onChange={(e) =>
              actions.comments.updateFields(postId, {
                content: e.target.value,
              })
            }
            value={state.comments.forms[postId]?.fields?.content || ""}
            placeholder="Mensaje"
          />
          {/* Show the errors for the individual fields.
            E.g. content of a comment cannot be empty and the email must be valid */}
          {form?.errors?.content}
        </label>

        {/* Show the REST API error messages.
            E.g. "Sorry, you must be logged in to comment." */}
        {form?.errorMessage && <Message>ERROR: {form?.errorMessage}</Message>}

        {/* If the form was submitted successfully we can show a confirmation */}
        <div>
          {form?.isSubmitted && "The comment was submitted successfully!"}
        </div>

        <Button type="submit">Enviar</Button>
      </Form>
    </>
  );
};

export default connect(CommentsForm);

const Message = styled.p`
  margin-bottom: 2rem;
`;
const Form = styled.form`
  max-width: 72rem;
  width: 100%;
  margin-bottom: 4rem;
  @media (min-width: 700px) {
    margin-bottom: 6rem;
  }
`;
