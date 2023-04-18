import React, { Fragment, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ShoppingCart from "./ShoppingCart";
import { fetchProductList } from "../data/services";
import { Product, Cart } from "../types";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState<Cart>({});

  const addToCart = (productId: number) => {
    if (productId in cartItems) {
      setCartItems({
        ...cartItems,
        [productId]: cartItems[productId] + 1,
      });
    } else {
      setCartItems({
        ...cartItems,
        [productId]: 1,
      });
    }
  };

  useEffect(() => {
    fetchProductList().then(setProducts);
  }, []);

  return (
    <Fragment>
      <header>
        <h1 className="align-center">Toys Shop</h1>
      </header>
      <main className="product-container">
        {products.map((product: Product, index) => (
          <section className="product-card" key={index}>
            <ProductCard product={product} addToCart={addToCart} />
          </section>
        ))}
        <ShoppingCart items={cartItems} products={products} />
      </main>
    </Fragment>
  );
};

export default ProductList;
