import Header from "./components/Header";
import "./App.css";
import ProductsContainer from "./pages/ProductsContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Header />
      <Switch>
        <Route path="/" exact component={ProductsContainer} />
        <Route path="/cart" component={Cart} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
