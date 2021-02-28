import { connect, decode, Head } from "frontity";
import { useEffect } from "react";
import Article from "../post/post-item";
import ArchiveHeader from "./archive-header";
import Pagination from "./archive-pagination";
import Post from "../post";

const Archive = ({ state, showExcerpt, showMedia }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  // Whether the show the excerpt instead of the full content
  // If passed as prop, we'll respect that. Else, we'll use the theme settings
  const _showExcerpt = showExcerpt || !state.theme.showAllContentOnArchive;

  const allCats = state.source.get("all-categories").items;
  const currentCat = allCats.filter((cat) => cat.link.includes(data.link));

  useEffect(() => {
    Post.preload();
  }, []);

  return (
    <>
      {/* If inner page nofollow */}
      {data.page > 1 && (
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
      )}
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <ArchiveHeader
          title={decode(state.source[data.taxonomy][data.id].name)}
        >
          <p>{currentCat[0]?.description}</p>
        </ArchiveHeader>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <ArchiveHeader title={decode(state.source.author[data.id].name)} />
      )}

      {/* Iterate over the items of the list. */}
      {data.items.map(({ type, id }, index) => {
        const isLastArticle = index === data.items.length - 1;
        const item = state.source[type][id];
        // Render one Item component for each one.
        return (
          <Article
            key={item.id}
            item={item}
            showExcerpt={_showExcerpt}
            showMedia={showMedia}
          />
        );
      })}

      {data.totalPages > 1 && (
        <>
          <Pagination size="thin" />
        </>
      )}
    </>
  );
};

export default connect(Archive);
