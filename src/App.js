import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Panel from './shared/panel'
import Home from './pages/home'
import Cart from './pages/cart'
import Order from './pages/order'
import Admin from './pages/admin'

import ToastUi from './shared/ui/ToastUi'

const App = () => {
  return (

    <Router>
      <ToastUi
        label="Item added!"
      />
      <Panel />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/admin" component={Admin} />
          <Route path="/order" component={Order} />
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
