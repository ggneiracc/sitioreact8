//import logo from './logo.svg';
import './App.css';
import C01componente from './components/C01componente';
import C02estado from './components/C02estado';
import C03dobleestado from './components/C03dobleestado';
import C04variableProps from './components/C04variableProps';
import C05operador from './components/C05operador';
import C06matriz from './components/C06matriz';
import MatrizConOperaciones from './components/C07matrizOperaciones';
import C08componenteCONcss from './components/C08componenteCONcss';

function App() {
  return (
    <div className="App">
      <C01componente />
      <C02estado />
      <C03dobleestado />
      <C04variableProps xVariable="Hola mundo"/>
      <C05operador />
      <C06matriz />
      <MatrizConOperaciones />
      <C08componenteCONcss />
    </div>
  );
}

export default App;
