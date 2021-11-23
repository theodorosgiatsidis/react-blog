import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from "./Components/TopBar/TopBar";
import Home from "./Pages/Home/Home";
import Settings from "./Pages/Settings/Settings";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Write from "./Pages/Write/Write";
import { StoreContextProvider } from "./store";
import Post from "./Pages/post/Post";
import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
function App() {
  return (
    <StoreContextProvider>
      <Router>
        <TopBar />
        <Switch />
        <Route exact path="/">
          {/* <Home /> */}
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/write">
          <Write />
        </Route>
        <Route path="/post/:id">
          <Post />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Router>
    </StoreContextProvider>
  );
}

export default App;
