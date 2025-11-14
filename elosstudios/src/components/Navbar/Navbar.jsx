import './navbar.scss';

function Navbar() {
    return (
<header>
      <div className="logo">logo</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#sobre" className="nav-link">Sobre</a></li>
          <li><a href="#projetos" className="nav-link">Projetos</a></li>
          <li><a href="#contato" className="nav-link">Contato</a></li>
        </ul>
      </nav>
      <div className="button-nav">
        <button id='btn-projects-nav'>
          Projetos
        </button>
        <button id='btn-contact-nav'>
          Entre em Contato
        </button>
      </div>
    </header>
    );
}

export default Navbar;

