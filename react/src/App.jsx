import { useState } from "react";
import "./App.css"; // Asegúrate de tener este archivo

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Mi App</div>

          {/* Botón menú móvil */}
          <button className="menu-toggle" onClick={() => setOpen(!open)}>
            {open ? "✕" : "☰"}
          </button>

          {/* Menú en pantallas grandes */}
          <div className="menu-desktop">
            <a href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {open && (
          <div className="menu-mobile">
            <a href="#inicio" onClick={() => setOpen(false)}>Inicio</a>
            <a href="#servicios" onClick={() => setOpen(false)}>Servicios</a>
            <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
          </div>
        )}
      </nav>

      {/* Contenido principal */}
      <main className="main-content">
        <h1>Bienvenido a Mi App</h1>
        <p>Aquí inicia tu contenido principal.</p>
      </main>
    </div>
  );
}
