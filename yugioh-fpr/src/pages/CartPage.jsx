import { useCart } from "../contexts/CartContext";
import "./CartPage.css";

export const CartPage = () => {
  const { cartItems, dispatch } = useCart();

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.card_prices?.[0]?.cardmarket_price || "0");
      return total + price;
    }, 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1>CARRINHO DE COMPRAS</h1>
        <div className="empty-cart">
          <p>Seu carrinho está vazio</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>CARRINHO DE COMPRAS</h1>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.card_images?.[0]?.image_url}
              alt={item.name}
              className="cart-item-image"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />

            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>Tipo: {item.type}</p>
              <p>Atributo: {item.attribute || "N/A"}</p>
              <p>
                Preço: $
                {parseFloat(
                  item.card_prices?.[0]?.cardmarket_price || "0"
                ).toFixed(2)}
              </p>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="remove-button"
              aria-label="Remover item"
            >
              🗑️ Remover
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="total">
          <span>Total:</span>
          <span className="total-price">${calculateTotal().toFixed(2)}</span>
        </div>

        <button className="checkout-button">FINALIZAR COMPRA</button>
      </div>
    </div>
  );
};
