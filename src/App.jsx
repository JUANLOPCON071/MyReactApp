import './App.css'
import Card from './componentes/Card';
import Counter from './componentes/Counter';
import NameForm from './componentes/NameForm';
import ToggleButton from './componentes/ToggleButton';

function App() {
  const items = ["React", "JavaScript", "Vite"];

  return (
    <section>
      <h1>Formulario de nombre</h1>
      {/* <Card title="Card 1" description="Esta es una descripcion"/>
      <Card title="Card 2" description="Esta es otra descripcion"/>
      <ul>
        {
          items.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
      <Counter/>
      <ToggleButton/> */}
      <NameForm/>
    </section>
  )
}

export default App
