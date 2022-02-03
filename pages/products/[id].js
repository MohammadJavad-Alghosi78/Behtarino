// * node_modules
import mainHttp from "../../config/axios";
import React from "react";

const Product = ({ productData }) => {
  console.log(productData);
  return <h1>Product</h1>;
};

// * Server Side Request
export const getServerSideProps = async (context) => {
  const productId = context?.params?.id;
  const productData = await mainHttp
    .get(`/products/${productId}`)
    .then((response) => response?.data);
  return {
    props: {
      productData,
    },
  };
};

// * Export Page
export default Product;
