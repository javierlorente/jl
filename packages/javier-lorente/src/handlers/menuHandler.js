const getUrl = (item, source) => {
  switch (item.object) {
    case "category":
      return `/${source.categoryBase}/${item.slug}`;

    case "tag":
      return `/${source.tagBase}/${item.slug}`;

    case "custom":
      return item.url;

    default:
      return `/${item.slug}`;
  }
};

export const menuHandler = {
  name: "menus",
  priority: 10,
  pattern: "menus/:id",
  func: async ({ link, params, state, libraries }) => {
    const { api } = libraries.source;
    const { id } = params;

    const menu = await api.get({
      endpoint: "/menus/v1/menus/" + id,
      params: {
        per_page: 100,
      },
    });

    const { items } = await menu.json();

    const currentPageData = state.source.data[link];

    Object.assign(currentPageData, {
      id,
      isMenu: true,
      items: items.map((item) => [item.title, getUrl(item, state.source)]),
    });
  },
};
