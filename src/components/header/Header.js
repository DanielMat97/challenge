import './Header.css';

function Header() {
    return (
      <header className="w-100 p-3 bg-white">
        <div className="w-100 d-flex justify-content-between align-items-center subHeader">
            <h1 className="logo">Lagom</h1>
            <button className="btn"><i className="fas fa-bars fa-2x"></i></button>
        </div>
      </header>
    );
  }
  
  export default Header;
  