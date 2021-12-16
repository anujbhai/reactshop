import * as React from "react";
import { useParams } from "react-router-dom";

import Product from "./Product";
import { IProductData, products } from "./ProductData";

interface IProductPageState {
  product?: IProductData;
  added: boolean;
}

const ProductPage: React.FC = () => {
  const [productPageInfo, setProdutPageInfo] = React.useState<IProductPageState>({
    added: false
  });
  const params = useParams();

  React.useEffect(() => {
    if(params.id) {
      const id: number = parseInt(params.id, 10);
      const productData = products.filter(p => p.id === id)[0];

      setProdutPageInfo({ product: productData, added: productPageInfo.added });
    }
  }, [params.id, productPageInfo.added]);

  const handleAddClick = () => {
    setProdutPageInfo({ added: !productPageInfo.added });
    console.log("Added: ", productPageInfo.added);
  };

  const product = productPageInfo.product;
  
  return (
    <div className="page-container">
      {
        product
          ?
          <Product
            product={ product }
            inBasket={ productPageInfo.added }
            onAddToBasket={ () => handleAddClick() }
          />
          :
          (<p>Product not found!</p>)
      }
    </div>
  );
}


export default ProductPage;
