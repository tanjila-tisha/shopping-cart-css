import React, { useState } from "react";
import { Product } from "../types";
import "../index.css";

interface ProductCardProps {
  product: Product;
  addToCart: (id: number) => void;
}

const ProductCard = ({ product, addToCart }: ProductCardProps) => {
  const { id, title, description, image, regularPrice, salesPrice } = product;
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="product">
      <img
        width="100%"
        src={image}
        alt={title}
        title={title}
        height="250"
        loading="lazy"
        className="image"
      />
      <div className="card-content-container">
        <h3 className="align-center">{title}</h3>

        <div className={`content full ${!expanded ? "close" : "open"}`}>
          {description}
        </div>
        <div
          aria-expanded={expanded}
          aria-label="show more"
          onClick={handleExpandClick}
          className={`more ${!expanded ? "collapse" : "expanded"}`}
        >
          {!expanded ? "See information" : "Hide information"}
        </div>
        <div className="price-container">
          {salesPrice && <div className="sales-price">{salesPrice} kr</div>}
          <div className={salesPrice ? "discount-price" : "regular-price"}>
            <span>{regularPrice} kr</span>
          </div>
        </div>
        <div className="button-container">
          <button onClick={() => addToCart(id)} className="button">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
