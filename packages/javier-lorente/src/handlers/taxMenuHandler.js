
export const taxMenuHandler = {
  name: "taxMenu",
  priority: 10,
  pattern: "taxs-menu/:id",
  func: async ({ link, params, state, libraries }) => {

    const response = await libraries.source.api.get({ endpoint: "/acf/v3/categories/" + params.id});
    const taxs = await response.json()

    const currentPageData = state.source.data[link];
    
    Object.assign(currentPageData, {
      isAcfTaxs: true,
      items: Array.isArray(taxs.acf) ? taxs.acf : taxs.acf.taxMenu
    });
  }
};
