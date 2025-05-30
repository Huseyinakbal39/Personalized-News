/* import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isLoggedIn, onLogout }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">📰 Haber Uygulaması</Link>
      </div>

      <div className="navbar-right">
        <Link to="/interests" className="nav-link">İlgi Alanları</Link>

        {isLoggedIn ? (
          <>
            <span className="nav-user">👤 {user?.username}</span>
            <button onClick={onLogout} className="nav-button">Çıkış Yap</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Giriş</Link>
            <Link to="/register" className="nav-link">Kayıt</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar; */

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isLoggedIn, onLogout }) => {
  //const user = JSON.parse(localStorage.getItem("user"));
  let user = null;
  try {
    const userJson = localStorage.getItem("user");
    if (userJson) {
      user = JSON.parse(userJson);
    }
  } catch (err) {
    console.error("Kullanıcı verisi çözülemedi:", err);
  }
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">📰 Haber Uygulaması</Link>
      </div>

      <div className="navbar-right">
        {/* İlgi alanları sadece giriş yapılmışsa gösterilir */}
        {isLoggedIn && (
          <Link to="/interests" className="nav-link">İlgi Alanları</Link>
        )}

        {isLoggedIn ? (
          <>
            <span className="nav-user">👤 {user?.username}</span>
            <button onClick={onLogout} className="nav-button">Çıkış Yap</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Giriş</Link>
            <Link to="/register" className="nav-link">Kayıt</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


