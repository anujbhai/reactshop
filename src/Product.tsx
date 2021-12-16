import * as React from "react";

import Tabs from "./Tabs";
import { IProductData } from "./ProductData";

interface IProductProps {
  product: IProductData;
  inBasket: boolean;
  onAddToBasket: () => void;
}

const Product: React.FC<IProductProps> = props => {
  const { product, inBasket, onAddToBasket } = props;

  const handleAddClick = () => {
    onAddToBasket();
  };

  return (
    <>
      <h1>{ product.name }</h1>

      <Tabs
        headings={ ["Description", "Reviews"] }
      />

      <p>{ product.description }</p>

      <div>
        <ul className="product-reviews">
        { 
          product.reviews.map((review, index) => (
            <li key={ index } className="product-reviews-item">
              <em>{ review.comment }</em> <strong>- { review.reviewer }</strong>
            </li>
          ))
        }
        </ul>
      </div>

      <p className="product-price">
      {
        new Intl.NumberFormat("en-us", {
          currency: "USD",
          style: "currency"
        }).format(product.price)
      }
      </p>

      { !inBasket && (
        <button onClick={ () => handleAddClick() }>Add to basket</button>
      )}
    </>
  );
}

export default Product;
