import { Container, Typography } from "@mui/material";
import React from "react";
import { catalogue } from "../data/productData";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

const ProductsContainer = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  // const [filteredProducts, setFilteredProducts] = React.useState([]);

  // const filterProducts = (searchTerm) => {
  //   const filteredProducts = catalogue.filter((product) =>
  //     product.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setFilteredProducts(filteredProducts);
  // };

  return (
    <>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Typography sx={{ marginTop: 5 }} variant="h4">
          Product List
        </Typography>
      </div>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </Container>
      <Container
        sx={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}
      >
        {catalogue.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Container>
    </>
  );
};

export default ProductsContainer;
