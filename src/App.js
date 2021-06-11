import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Panel from "./shared/panel";
import Footer from "./shared/footer";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Order from "./pages/order";
import Admin from "./pages/admin";
import Product from "./pages/product";
import Filtration from "./pages/filtration";

const App = () => {
  return (
    <Router>
      <Panel />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/admin" component={Admin} />
          <Route path="/order" component={Order} />
          <Route path="/product/:id" component={Product} />
          <Route path="/filtered/products/:filter" component={Filtration} />
          <Redirect to="/" />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
