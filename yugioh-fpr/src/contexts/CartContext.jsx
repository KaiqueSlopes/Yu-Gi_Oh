import { useReducer, useEffect } from "react";
import { CartContext } from "./CartContext";

function cartReducer(state, action) {
  switch (action.type) {
    case "LOAD_CART": {
      return { ...state, items: action.payload };
    }
    case "ADD_ITEM": {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return { ...state, showDuplicateAlert: true };
      }
      return {
        ...state,
        items: [...state.items, action.payload],
        showConfirmation: true,
      };
    }
    case "REMOVE_ITEM": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    }
    case "CLEAR_CART": {
      return { ...state, items: [] };
    }
    case "CLOSE_MODAL": {
      return { ...state, showConfirmation: false, showDuplicateAlert: false };
    }
    default: {
      return state;
    }
  }
}

const initialState = {
  items: [],
  showConfirmation: false,
  showDuplicateAlert: false,
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const storedCart = localStorage.getItem("yugioh-cart");
    if (storedCart) {
      dispatch({ type: "LOAD_CART", payload: JSON.parse(storedCart) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("yugioh-cart", JSON.stringify(state.items));
  }, [state.items]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
