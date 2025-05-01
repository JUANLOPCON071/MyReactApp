import './App.css'
import Card from './componentes/Card/Card';
import Counter from './componentes/Counter';
import CounterWhithEffect from './componentes/CounterWithEffect';
import NameForm from './componentes/NameForm';
import ToggleButton from './componentes/ToggleButton';

function App() {
  const items = ["React", "JavaScript", "Vite"];

  return (
    <section>
      <h1>Formulario de nombre</h1>
      <Card/>
      <CounterWhithEffect/>
    </section>
  )
}

export default App
