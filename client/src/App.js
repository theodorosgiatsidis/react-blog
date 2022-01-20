import { BrowserRouter as Router, Switch } from "react-router-dom";
import TopBar from "./Components/TopBar/TopBar";
import { StoreContextProvider } from "./context/store";
import Routes from "./routes";

function App() {
  return (
    <StoreContextProvider>
      <Router>
        <TopBar />
        <Switch>
          <Routes />
        </Switch>
      </Router>
    </StoreContextProvider>
  );
}

export default App;
