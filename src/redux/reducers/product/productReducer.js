// ** Initial State
const initialState = {
  productList: [],
  isLoading: true,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT_DATA":
      return {
        ...state,
        productList: action.payload,
        isLoading: action.isLoading,
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        productList: state.productList.filter(
          (product) => product.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default productReducer;
