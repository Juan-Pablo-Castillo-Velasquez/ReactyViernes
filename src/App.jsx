/**
 * Componente App - Principal
 * 
 * Este es el componente raíz de la aplicación.
 * Importa y utiliza el componente TarjetaPersonal.
 */

import TarjetaPersonal from './components/TarjetaPersonal';
import './App.css';

function App() {
  return (
    <div className="app">
      <TarjetaPersonal />
    </div>
  );
}

export default App;