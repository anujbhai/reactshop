import * as React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import logo from './logo.svg';

interface IHeaderState {
  search: string;
};

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [headerState, setHeaderState] = React.useState<IHeaderState>({ search: "" });

  React.useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setHeaderState({ search: searchParams.get("search") || "" });
  }, [location.search]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setHeaderState({ search: e.currentTarget.value })
  };

  const handleSearchKeydown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if(e.key === "Enter") {
      navigate(`/products?search=${ headerState.search }`);
    }
  };

  return (
    <header className="header">
      <div className="search-container">
        <input
          type="search"
          placeholder="search"
          value={ headerState.search }
          onChange={ e => handleSearchChange(e) }
          onKeyDown={ e => handleSearchKeydown(e) }
        />
      </div>

      <img
        src={ logo }
        className="header-logo"
        alt=""
      />

      <h1 className="header-title">React Shop</h1>

      <nav>
        <NavLink
          to="/products"
          className="header-link"
        >Products</NavLink>
        <NavLink
          to="/admin"
          className="header-link"
        >Admin</NavLink>
      </nav>
    </header>
  );
};

export default Header;
