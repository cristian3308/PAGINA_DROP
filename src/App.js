import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Login from './components/Auth/login';
import Register from './components/Auth/register';
import PrivateRoute from './components/Auth/PrivateRoute';
import Cart from './components/Cart/cart';
import NotFound from './pages/NotFound';
import ProductList from './components/Product/prod';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/cart" component={Cart} />
          <Route path="/products" component={ProductList} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
