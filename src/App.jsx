import './App.css'
import Button from './componentes/Button/Button';
import Card from './componentes/Card/Card';
import Counter from './componentes/Counter';
import CounterWhithEffect from './componentes/CounterWithEffect';
import NameForm from './componentes/NameForm';
import TailwindText from './componentes/Text/Text';
import ToggleButton from './componentes/ToggleButton';

function App() {
  const items = ["React", "JavaScript", "Vite"];

  return (
    <>
      <Button><p>Gris</p></Button>
      <Button blue><p>Azul</p></Button>
      <TailwindText/>
    </>
  )
}

export default App
