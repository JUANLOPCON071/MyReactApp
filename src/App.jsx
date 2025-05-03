import './App.css'
import Button from './componentes/Button/Button';
import Card from './componentes/Card/Card';
import Counter from './componentes/Counter';
import CounterWhithEffect from './componentes/CounterWithEffect';
import NameForm from './componentes/NameForm';
import StaticComponent from './componentes/StaticComponent/StaticComponent';
import TailwindText from './componentes/Text/Text';
import ToggleButton from './componentes/ToggleButton';
import UserList from './componentes/UserList/UserList';
import UserListWithLoading from './componentes/UserListWithLoading/UserListWithLoading';

function App() {
  const items = ["React", "JavaScript", "Vite"];

  return (
    <>
      <StaticComponent/>
      {/* <UserList/> */}
      <UserListWithLoading/>
    </>
  )
}

export default App
