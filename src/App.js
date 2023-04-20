import NavBar from './Components/NavBar/NavBar';
import Router from './Router/Router';
import {Background} from './app.styles'
function App() {
  return <Background>
   <Router/>
   <NavBar/>
  </Background>;
}

export default App;
