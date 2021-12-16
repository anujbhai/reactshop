import * as React from "react";
import { Link, useLocation } from "react-router-dom";

import { IProductData, products } from "./ProductData";

interface IProductsPageState {
  products: IProductData[];
  search: string;
}

const ProductsPage: React.FC = () => {
  const location = useLocation();

  const [productPageState, setProductPageState] = React.useState<IProductsPageState>({
    products: [],
    search: "",
  });

  const searchParamsValue = new URLSearchParams(location.search);
  const searchValue = searchParamsValue.get("search") || "";

  if(searchValue !== productPageState.search)
    setProductPageState({ products: productPageState.products, search: searchValue });

  React.useEffect(() => {
    setProductPageState({
      products: products,
      search: productPageState.search,
    });
  }, [productPageState.search]);

  return (
    <div className="page-container">
      <p>Welcome to React Shop where you can get all your tools for ReactJS!</p>

      <ul className="product-list">
        {
          productPageState.products.map(product => {
            if(
              !productPageState.search || 
              (productPageState.search &&
                product.name
                  .toLowerCase()
                  .indexOf(productPageState.search.toLowerCase()) > -1)
            ) {
              return (
                <li
                className="product-list-item"
                key={ product.id }
              >
                <Link to={ `/products/${ product.id }` }>{ product.name }</Link>
              </li>
                );
            } else {
              return null;
            }
          })
        }
      </ul>
    </div>
  );
};

// class ProductsPage extends React.Component<{}, IProductsPageState> {
//   public constructor(props: {}) {
//     super(props);

//     this.state = {
//       products: [],
//       search: "",
//     };
//   }

//   public componentDidMount() {
//     this.setState({
//       products
//     });
//   }

//   public static getDerivedStateFromProps(
//     props: Params,
//     state: IProductsPageState
//   ) {
//     const searchParams = new URLSearchParams(props.location.search)
//   }

//   render() {
//     return (
//       <div className="page-container">
//         <p>Welcome to React Shop where you can get all your tools for ReactJS!</p>

//         <ul className="product-list">
//           {
//             this.state.products.map(product => (
//               <li
//                 className="product-list-item"
//                 key={ product.id }
//               >
//                 <Link to={ `/products/${ product.id }` }>{ product.name }</Link>
//               </li>
//             ))
//           }
//         </ul>
//       </div>
//     );
//   }
// }

export default ProductsPage;
