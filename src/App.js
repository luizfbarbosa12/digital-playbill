import Router from "./Router/Router";
import { Background } from "./app.styles";
import CurrentSong from "./contexts/CurrentSong";
function App() {
  return (
    <Background>
      <CurrentSong>
        <Router />
      </CurrentSong>
    </Background>
  );
}

export default App;
