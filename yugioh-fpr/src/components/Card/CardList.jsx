import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { CardItem } from "./CardItem";
import "./CardList.css";

export function CardList({ filters = {} }) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { data: cards, loading, error } = useApi(page, pageSize, filters);

  const totalPages = Math.ceil(100 / pageSize);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePageSizeChange = (e) => {
    const newSize = Number(e.target.value);
    setPageSize(newSize);
    setPage(1);
  };

  if (loading) return <div className="loading">Carregando cartas...</div>;
  if (error) return <div className="error">Erro: {error}</div>;

  return (
    <div className="card-list">
      <div className="card-controls">
        <div className="page-size-selector">
          <span className="page-size-label">Itens por página:</span>
          <select
            value={pageSize}
            onChange={handlePageSizeChange}
            aria-label="Selecionar quantidade de itens por página"
            className="page-size-dropdown"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>

        <div className="pagination" aria-label="Navegação de páginas">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            aria-label="Página anterior"
            className="pagination-btn"
          >
            ‹
          </button>

          {Array.from({ length: Math.min(5, totalPages) }, (_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={
                  page === pageNumber
                    ? "pagination-btn active"
                    : "pagination-btn"
                }
                aria-label={`Página ${pageNumber}`}
                aria-current={page === pageNumber ? "page" : undefined}
              >
                {pageNumber}
              </button>
            );
          })}

          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
            aria-label="Próxima página"
            className="pagination-btn"
          >
            ›
          </button>
        </div>
      </div>

      <div className="card-grid">
        {cards.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
