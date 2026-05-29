/**
 * Componente TarjetaPersonal
 * 
 * Este componente muestra una tarjeta con información personal.
 * Utiliza JSX correctamente y sigue buenas prácticas de React.
 */

import '../styles/TarjetaPersonal.css';

function TarjetaPersonal() {
  // Información personal del usuario
  const datosPersonales = {
    nombre: 'Juan Pablo',
    edad: 22,
    carrera: 'Análisis y Desarrollo de Software',
    foto: 'https://i.pravatar.cc/200?img=12',
    colorFavorito: 'Azul'
  };

  // Manejador para el botón de contacto
  const handleContacto = () => {
    alert(`¡Gracias por tu interés en contactarme! Soy ${datosPersonales.nombre}`);
  };

  return (
    <div className="contenedor-tarjeta">
      <div className="tarjeta">
        {/* Imagen de perfil circular */}
        <img
          src={datosPersonales.foto}
          alt={`Foto de perfil de ${datosPersonales.nombre}`}
          className="foto-perfil"
        />

        {/* Información personal */}
        <div className="info-personal">
          <h1 className="nombre">{datosPersonales.nombre}</h1>
          
          <div className="detalle">
            <span className="etiqueta">Edad:</span>
            <span className="valor">{datosPersonales.edad} años</span>
          </div>

          <div className="detalle">
            <span className="etiqueta">Carrera:</span>
            <span className="valor">{datosPersonales.carrera}</span>
          </div>

          <div className="detalle">
            <span className="etiqueta">Color Favorito:</span>
            <span className="valor">{datosPersonales.colorFavorito}</span>
          </div>
        </div>

        {/* Botón de contacto */}
        <button
          className="btn-contacto"
          onClick={handleContacto}
        >
          Contacto
        </button>
      </div>
    </div>
  );
}

// Exportación por defecto (buena práctica en React)
export default TarjetaPersonal;