import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <a href="#inicio" className="nav-link">
              Inicio
            </a>
          </li>
          <li>
            <a href="#productos" className="nav-link">
              Productos
            </a>
          </li>
          <li>
            <a href="#ofertas" className="nav-link">
              Ofertas
            </a>
          </li>
          <li>
            <a href="#contacto" className="nav-link">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
