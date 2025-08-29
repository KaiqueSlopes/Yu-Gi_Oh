import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import "./Header.css";

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { state } = useCart();
  const cartItemsCount = state.items.length;

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Buscar:", searchTerm);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img
            src="../public/images/icons/logo.png"
            alt="FPR Yu-Gi-Oh!"
            width={239}
            height={143}
          />
        </Link>

        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Pesquisar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            🔍
          </button>
        </form>

        <Link to="/cart" className="cart-link">
          <span className="cart-icon">
            <img
              src="../public/images/icons/cart-icon.svg.svg"
              alt="Icone Carrinho"
            />
          </span>
          {cartItemsCount > 0 && (
            <span className="cart-badge">{cartItemsCount}</span>
          )}
        </Link>
      </div>
    </header>
  );
};
