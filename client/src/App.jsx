import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import { getCategories, getProducts, getAllProducts } from './service';

function App() {
  const [categories, setCategories] = useState({ errorMessage: '', data: [] });
  const [products, setProducts] = useState({ errorMessage: '', data: [] });

  useEffect(() => {
    getCategories().then((obj) => setCategories(obj));
    getAllProducts().then((obj) => setProducts(obj));
  }, []);

  const renderProducts = (id) => {
    getProducts(id).then((obj) => setProducts(obj));
  };

  const renderAllProducts = () => {
    getAllProducts().then((obj) => setProducts(obj));
  };

  const detailProduct = (id) => {
    console.log(products.data.find((p) => p.id === id));
  };

  return (
    <div className="App">
      <Header categories={categories} renderProducts={renderProducts} renderAllProducts={renderAllProducts} />
      <Products products={products} detailProduct={detailProduct} />
      <Footer />
    </div>
  );
}

export default App;
