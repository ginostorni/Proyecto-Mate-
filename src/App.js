import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Compartir from "./components/Compartir";
import Mate from "./components/Mate";
import Polvo from "./components/Polvo";
import Termo from "./components/Termo";
import Yerba from "./components/Yerba";
import Navegacion from "./components/Navegacion";

function App() {
  return (
    <div>
      <Router>
        <Route path="/Compartir" component={Compartir} />
        <Route path="/Mate" component={Mate} />
        <Route path="/Polvo" component={Polvo} />
        <Route path="/Termo" component={Termo} />
        <Route path="/Yerba" component={Yerba} />
        <Navegacion />
      </Router>
    </div>
  );
}

export default App;
