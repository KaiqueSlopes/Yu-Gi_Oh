import { useCart } from "../../contexts/CartContext";
import "./Card.css";

export const CardItem = ({ card }) => {
  const { cartItems, dispatch } = useCart();

  const handleAddToCart = () => {
    const isItemInCart = cartItems.some((item) => item.id === card.id);

    if (isItemInCart) {
      console.log("Item já está no carrinho!");
    } else {
      dispatch({ type: "ADD_ITEM", payload: card });
      console.log("Item adicionado ao carrinho!");
    }
  };

  return (
    <div className="card-item">
      <img
        src={card.card_images?.[0]?.image_url}
        alt={card.name}
        className="card-image"
      />
      <div className="card-info">
        <h3 className="card-name">{card.name}</h3>
        <p className="card-type">{card.type}</p>
        <p className="card-attribute">{card.attribute}</p>
        <p className="card-price">
          $
          {parseFloat(card.card_prices?.[0]?.cardmarket_price || "0").toFixed(
            2
          )}
        </p>
      </div>
      <button onClick={handleAddToCart} className="add-to-cart-btn">
        COMPRAR
      </button>
    </div>
  );
};
