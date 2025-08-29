import "./Modals.css";

export const ModalConfirm = ({ isOpen, onClose, product, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>✅ Item Adicionado!</h2>
        <p>
          O produto <strong>{product?.name}</strong> foi adicionado ao carrinho.
        </p>

        <div className="modal-buttons">
          <button onClick={onClose} className="modal-button continue">
            Continuar Comprando
          </button>
          <button onClick={onConfirm} className="modal-button cart">
            Ver Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};
