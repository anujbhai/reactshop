import * as React from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import AdminPage, {
  AdminUser,
  AdminUsers,
  AdminProducts
} from "./AdminPage";
import LoginPage from "./LoginPage";
import ProductsPage from "./ProductsPage";
import ProductPage from "./ProductPage";
import NotFoundPage from "./NotFoundPage";
import Header from "./Header";

const ReactShopRoutes: React.FC = () => {
  const location = useLocation();

  const [loggedIn, setLoggedIn] = React.useState(true);

  return (
    <>
      <Header />

      <TransitionGroup component={ null }>
        <CSSTransition
          key={ location.key }
          timeout={ 500 }
          classNames="animate"
        >
          <Routes location={ location }>
            <Route path="/" element={ <Navigate replace to="/products" /> } />
            <Route path="/products" element={ <ProductsPage /> } />
            <Route path="/products/:id" element={ <ProductPage /> } />
            <Route
              path="/admin"
              element={ loggedIn ? <AdminPage /> : <Navigate to="/login" /> }
            >
              <Route path="users" element={ <AdminUsers /> }>
                <Route path=":id" element={ <AdminUser /> } />
              </Route>
              <Route path="products" element={ <AdminProducts /> } />
            </Route>
            <Route path="/login" element={ <LoginPage /> } />
            <Route path="*" element={ <NotFoundPage /> } />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default ReactShopRoutes