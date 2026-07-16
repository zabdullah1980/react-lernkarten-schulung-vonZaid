import Navigation from "./Navigation";

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div>
          <p className="eyebrow">React-Schulungsprojekt</p>
          <p className="site-title">Lernkarten-App</p>
        </div>

        <Navigation />
      </div>
    </header>
  );
}

export default Header;
