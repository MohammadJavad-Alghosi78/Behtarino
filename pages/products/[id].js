// * node_modules
import React from "react";

// * Config
import mainHttp from "../../config/axios";

// * Components
import ProductCard from "components/ProductCard";

// * Component
const Product = ({ productData }) => {
  const { title, category, description, id, image, price, rating } =
    productData;
  return (
    <ProductCard
      key={id}
      title={title}
      rate={rating}
      category={category}
      description={description}
      image={image}
      price={price}
    />
  );
};

// * Server Side Request
export const getServerSideProps = async (context) => {
  const productId = context?.params?.id;
  const productData = await mainHttp
    .get(`/products/${productId}`)
    .then((response) => response?.data);
  console.log(productData);
  return {
    props: {
      productData,
    },
  };
};

// * Export Page
export default Product;
