import { Container } from "@mui/material";
import React from "react";
import { catalogue } from "../data/productData";
import ProductCard from "./ProductCard";

const ProductsContainer = () => {
  return (
    <Container sx={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 10 }}>
      {catalogue.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default ProductsContainer;
