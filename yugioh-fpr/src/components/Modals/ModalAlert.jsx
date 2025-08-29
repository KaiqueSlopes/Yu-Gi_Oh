import "./Modals.css";

export const ModalAlert = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>⚠️ Item Já no Carrinho</h2>
        <p>
          O produto <strong>{product?.name}</strong> já foi adicionado ao
          carrinho anteriormente.
        </p>

        <div className="modal-buttons">
          <button onClick={onClose} className="modal-button ok">
            FECHAR
          </button>
        </div>
      </div>
    </div>
  );
};
