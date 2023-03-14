import "./scss/styles.scss";

import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`App ${theme}`}>
      <h1>SCSS LIVE CODING</h1>
      <button onClick={handleClick} className="change-color">
        {theme}
      </button>
      <nav className="navbar-container">
        <h2>Navbar</h2>
        <button>Click me</button>
      </nav>
      <header className="home-container">
        <h2>Home</h2>
        <button>Click me</button>
      </header>
      <main className="about-container">
        <h2>About</h2>
        <button>Click me</button>
      </main>
      <footer className="footer-container">
        <div>
          <h2>Footer</h2>
        </div>
        <div className="footer-children-wrapper">
          <div className="footer-child-one"></div>
          <div className="footer-child-two"></div>
          <div className="footer-child-three"></div>
        </div>
      </footer>
    </div>
  );
}
