import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProductList } from "../api";

const Home = () => {
  const productList = useSelector((state) => state.product.productList);
  const isLoad = useSelector((state) => state.product.isLoading);
  const dispatch = useDispatch();
  const [searchProduct, setSearchProduct] = useState("");

  useEffect(() => {
    getProductList(dispatch);
  }, [dispatch]);

  const handleDeleteProduct = (deleteId) => {
    dispatch(deleteProduct(dispatch, deleteId));
  };
  const filteredProducts = productList.filter((product) =>
    product.category.toLowerCase().includes(searchProduct.toLowerCase())
  );
  return (
    <>
      {isLoad && <h1 className="text-center">Loading....</h1>}
      <div className="container mt-5 d-flex flex-wrap">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by category..."
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
          />
        </div>
        <div className="row">
          {filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts.map((product) => {
              return (
                <div className="col-4" key={product.id}>
                  <div className="card shadow mx-2 my-2 p-1 position-relative">
                    <button
                      type="button"
                      className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      Delete
                    </button>
                    <img
                      className="card-img-top  align-self-center bg-black rounded-circle mt-3 h-25 w-25"
                      src={product.thumbnail}
                      alt=""
                    />
                    <div className="card-body">
                      <p className="card-text fw-bolder mb-0">
                        Category : {product.category}
                      </p>
                      <p className="card-text fw-bolder mb-0">
                        {product.title}
                      </p>
                      <p className="card-text fw-bolder mb-0">
                        Brand : {product.brand}
                      </p>
                      <p className="card-text fw-bolder mb-0">
                        Price : {product.price}
                      </p>
                      <p className="card-text">{product.description}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center mt-5">
              <h5>No products found.</h5>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Home;
