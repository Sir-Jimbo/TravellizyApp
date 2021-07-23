
const getLoadingCategories = (state: any) => state.categories.loading;

const getAllCategories = (state: any) => state.categories.categories;

const getError = (state: any) => state.categories.error;

const selectorsCategoties = {
   getLoadingCategories,
   getAllCategories,
   getError,
};

export default selectorsCategoties;