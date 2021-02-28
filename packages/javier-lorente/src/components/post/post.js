import { styled, connect } from "frontity";
import { useEffect } from "react";
import FeaturedMedia from "./featured-media";
import { EntryContent, Post as _Post, PostInner, PostTitle } from "./post-item";
import PostCategories from "./post-categories";
import PostTags from "./post-tags";
import Comments from "../comments";

const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get the data of the author.
  // const author = state.source.author[post.author];
  // Get a human readable date.
  // const date = new Date(post.date);

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  // Get all categories
  const allCategories = state.source.category;

  /**
   * The item's categories is an array of each category id
   * So, we'll look up the details of each category in allCategories
   */
  const categories =
    post.categories && post.categories.map((catId) => allCategories[catId]);

  // Get all tags
  const allTags = state.source.tag;

  /**
   * The item's categories is an array of each tag id
   * So, we'll look up the details of each tag in allTags
   */
  const tags = post.tags && post.tags.map((tagId) => allTags[tagId]);

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <div>
      <PostArticle>
        <Header>
          <PostTitle
            as="h1"
            className="heading-size-1"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          {/* The post's metadata like author, publish date, and comments */}
        </Header>

        {/* If the post has an excerpt (short summary text), we render it */}
        {post.content && (
          <PostInner>
            <Html2React html={post.content.rendered} />
            {/* If the post has tags, render it */}
            {post.tags && <PostTags tags={tags} />}
          </PostInner>
        )}
      </PostArticle>
      {data.isPost && <Comments postId={post.id} />}
    </div>
  ) : null;
};

export default connect(Post);

const Header = styled.div`
  margin: 0;
  padding: 4rem 0 2rem;
  @media (min-width: 700px) {
    padding: 8rem 0 4rem;
  }
`;

const PostArticle = styled(_Post)`
  padding-top: 0 !important;
`;

const FeaturedImage = styled(FeaturedMedia)`
  margin-top: 0 !important;
  position: relative;

  > div {
    position: relative;
  }

  &:before {
    background: #fff;
    content: "";
    display: block;
    position: absolute;
    bottom: 50%;
    left: 0;
    right: 0;
    top: 0;
  }
`;
