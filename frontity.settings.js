const settings = {
  name: "javierlorente",
  state: {
    frontity: {
      url: "https://www.javierlorente.es/",
      title: "Javier Lorente - SEO, inversiones y promos para viajar.",
      description: "SEO, inversiones y promos para viajar.",
      backend: "https://frontity.javierlorente.es/",
    },
  },
  packages: [
    {
      name: "@frontity/google-analytics",
      state: {
        googleAnalytics: {
          trackingId: "UA-181168483-1",
        },
      },
    },
    {
      name: "javier-lorente",
      state: {
        theme: {
          logo: "J.Lorente",
          menu: [],
          showSearchInHeader: true,
          autoPreFetch: "hover",
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
        source: {
          categoryBase: "c",
          tagBase: "tag",
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          prefix: "/wp-json",
          // api: ({ state }) => state.frontity.backend + state.source.prefix,
          api: "https://frontity.javierlorente.es/wp-json",
          // api: "https://test.frontity.io/wp-json",
          // api: "http://javierlorrente.wst/wp-json",
          params: {
            per_page: 20,
            // type: ["post", "page"],
          },
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags",
    "@frontity/wp-comments",
  ],
};

export default settings;
