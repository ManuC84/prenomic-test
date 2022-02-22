import { Container, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.favorites);
  return (
    <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography sx={{ marginTop: 5 }} variant="h4">
        Your Favorites
      </Typography>
      <Container
        sx={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}
      >
        {favorites.length > 0 ? (
          favorites.map((item) => <ProductCard key={item.id} product={item} />)
        ) : (
          <Typography variant="h6">You have no favorites</Typography>
        )}
      </Container>
    </Container>
  );
};

export default Favorites;
