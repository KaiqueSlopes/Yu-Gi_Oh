import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./Card.css";

export function CardItem({ card }) {
  const { dispatch } = useContext(CartContext);

  if (!card || !card.id) return null;

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: card.id,
        name: card.name,
        type: card.type,
        price: card.card_prices?.[0]?.cardmarket_price || 29.9,
        image: card.card_images?.[0]?.image_url,
      },
    });
  };

  const imageUrl = card.card_images?.[0]?.image_url;
  const cardName = card.name;
  const cardPrice = Number(card.card_prices?.[0]?.cardmarket_price || 29.9);
  const formattedPrice = cardPrice.toFixed(2);

  return (
    <div className="card">
      <img src={imageUrl} alt={cardName} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{cardName}</h3>
        <p className="card-price">R$ {formattedPrice}</p>
        <button className="card-buy-btn" onClick={handleAddToCart}>
          COMPRAR
        </button>
      </div>
    </div>
  );
}
