
import React from 'react';
import Header from "./containers/Header";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductListing from "./containers/ProductList";
import ProductDetails from "./containers/ProductDetails";

import "./App.css";

function App() {


  return (
    
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetails} />
          <Route>404 Not Found</Route>
        </Switch>
      </BrowserRouter>
  
  );
}

export default App;
