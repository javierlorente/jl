import { connect, decode, styled } from "frontity";
import { Fragment } from "react";
import Link from "../link";

const PostTags = ({ tags }) => {
  // Remove empty or undefined tags
  const postTags = tags.filter(Boolean);

  if (postTags.length === 0) {
    return null;
  }

  return (
    <PostTagsWrapper>
      Tags:
      {postTags.map((tag, index) => {
        const isLastTag = index === postTags.length - 1;
        return (
          <Fragment key={tag.id}>
            <Tag link={tag.link}>{decode(tag.name)}</Tag>
            {!isLastTag && <>, </>}
          </Fragment>
        );
      })}
    </PostTagsWrapper>
  );
};

export default connect(PostTags);

const PostTagsWrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled(Link)`
  border-radius: 9999em;
  display: inline-block;
  padding: 0.5rem 2rem;
  text-transform: uppercase;
  background-image: var(--gradient-secondary);
  font-size: 1.3rem;
  letter-spacing: 0.05rem;
  font-weight: bold;
  color: #ffffff;
  box-shadow: var(--shadow-lg);

  &:hover {
    box-shadow: var(--shadow-xl);
    transform: translateY(-0.25rem);
  }
`;
