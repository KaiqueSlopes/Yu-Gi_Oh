import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © 2023 FPR Anime - Todos os direitos reservados.
        </p>
        <img
          src="../images/icons/abacaxi.png"
          alt="Mascote Abacaxi"
          className="footer-image"
        />
      </div>
    </footer>
  );
}
