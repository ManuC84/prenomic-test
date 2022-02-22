import Header from "./components/Header";
import "./App.css";
import ProductsContainer from "./components/ProductsContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={ProductsContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
