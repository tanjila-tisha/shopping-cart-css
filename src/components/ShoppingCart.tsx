import React from "react";
import { Cart, Product } from "../types/index";
import "../index.css";
import { getPrice, getTotal } from "../utils";

interface ShoppingCartProps {
  products: Product[];
  items: Cart;
}

const ShoppingCart = ({ items, products }: ShoppingCartProps) => {
  const total = getTotal(items, products);

  if (!Object.keys(items).length) return null;

  return (
    <div className="cart-container">
      <h2 className="align-center">Shopping cart</h2>
      <div className="table-container">
        <table width="650" aria-label="Shopping cart">
          <tbody>
            {Object.keys(items).map((id: string) => {
              const product = products.find((p) => p.id === parseInt(id));
              if (!product) return;
              const price = getPrice(product);
              const { image, title } = product;
              return (
                <tr key={id}>
                  <td>{<img src={image} width="50" height="50" />}</td>
                  <td>{title}</td>
                  <td>
                    {items[parseInt(id)]} X {price} kr
                  </td>
                </tr>
              );
            })}
            <tr>
              <td colSpan={3} align="center">
                Total Price: {total} kr
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShoppingCart;
