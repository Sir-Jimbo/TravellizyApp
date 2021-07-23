
const getLoadingProducts = (state: any) => state.products.loading;

const getAllProducts = (state: any) => state.products.products;

const getError = (state: any) => state.products.error;

const selectors = {
    getLoadingProducts,
    getAllProducts,
    getError,
};

export default selectors;