import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
// components
import Navbar from './components/navbar/Navbar';
import Product from './components/product/Product'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero';
import Premium from './components/premium/Premium'
import Users from './components/users/Users'
import Solution from './components/solution/Solution'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Hero/>
        <Product/>
        <Solution/>
        <Users/>
        <Premium/>
        <Footer/>
      </BrowserRouter>
    );
  }
}

export default App;
