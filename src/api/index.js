export const getProductList = async (dispatch) => {
  const res = fetch("https://dummyjson.com/products");
  res
    .then((res) => res.json())
    .then((res) =>
      dispatch({
        type: "GET_PRODUCT_DATA",
        payload: res.products,
        isLoading: false,
        error: null,
      })
    );
};

export const deleteProduct = async (dispatch, deleteId) => {
  console.log("id");
  const res = fetch(`https://dummyjson.com/products/${deleteId}`, {
    method: "DELETE",
  });
  res
    .then((res) => res.json())
    .then((res) =>
      dispatch({
        type: "DELETE_PRODUCT",
        payload: deleteId,
      })
    );
};
