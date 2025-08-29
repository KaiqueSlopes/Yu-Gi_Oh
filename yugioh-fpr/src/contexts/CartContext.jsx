import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_CART":
      return { cartItems: action.payload };

    case "ADD_ITEM":
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) return state;
      return { cartItems: [...state.cartItems, action.payload] };

    case "REMOVE_ITEM":
      return {
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case "CLEAR_CART":
      return { cartItems: [] };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  useEffect(() => {
    const savedCart = localStorage.getItem("yugioh-cart");
    if (savedCart) {
      dispatch({ type: "LOAD_CART", payload: JSON.parse(savedCart) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("yugioh-cart", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
};
