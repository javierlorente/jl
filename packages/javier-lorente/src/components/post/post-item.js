import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "./featured-media";
import PostCategories from "./post-categories";
import PostTags from "./post-tags";

/**
 * Article Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const PostItem = ({
  state,
  item,
  libraries,
  showExcerpt,
  showMedia = true,
}) => {
  // Get all categories
  const allCategories = state.source.category;

  /**
   * The item's categories is an array of each category id
   * So, we'll look up the details of each category in allCategories
   */
  const categories =
    item.categories && item.categories.map((catId) => allCategories[catId]);

  // Get all tags
  const allTags = state.source.tag;

  /**
   * The item's categories is an array of each tag id
   * So, we'll look up the details of each tag in allTags
   */
  const tags = item.tags && item.tags.map((tagId) => allTags[tagId]);

  const content = showExcerpt ? item.excerpt : item.content;
  const { Component: Html2React } = libraries.html2react;
  return (
    <Post>
      {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */}
      {state.theme.featuredMedia.showOnArchive && showMedia && (
        <Link link={item.link}>
          <FeaturedMedia id={item.featured_media} />
        </Link>
      )}

      <PostHeader>
        {/* The clickable heading for the post */}
        <PostLink link={item.link}>
          <PostTitle
            dangerouslySetInnerHTML={{ __html: item.title.rendered }}
          />
        </PostLink>
      </PostHeader>

      {/* If the post has an excerpt (short summary text), we render it */}
      {content && (
        <PostInner>
          <Html2React html={content.rendered} />
        </PostInner>
      )}
    </Post>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(PostItem);

export const Post = styled.article`
  box-shadow: var(--shadow-md);
  background-color: var(--color-light2);
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
  max-width: var(--container-md);
  margin-bottom: 4rem;
  &:first-of-type {
    margin-top: 6rem;
  }
  @media (min-width: 1000px) {
    padding: 4rem;
    margin-bottom: 6rem;
  }

  .more-link {
    display: none;
  }
`;

export const PostHeader = styled.header`
  padding: 1rem 0 2rem;
`;

export const PostTitle = styled.h2`
  margin: 0;
  font-weight: 500;
  @media (min-width: 700px) {
    font-size: 4rem;
  }
`;

const PostLink = styled(Link)`
  color: inherit;
`;

export const PostInner = styled.div``;
