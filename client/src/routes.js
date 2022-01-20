import { BrowserRouter as Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Settings from "./Pages/Settings/Settings";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Write from "./Pages/Write/Write";
import { StoreContext, StoreContextProvider } from "./context/store";
import Post from "./Pages/post/Post";
import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import { useContext } from "react";

function App() {
  const { user } = useContext(StoreContext);

  return (
    <>
      <Route exact path="/">
        {/* <Home /> */}
        <Home />
      </Route>
      <Route path="/login">{user ? <Home /> : <Login />}</Route>
      <Route path="/register">{user ? <Home /> : <Register />}</Route>
      <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
      <Route path="/write">{user ? <Write /> : <Register />}</Route>
      <Route path="/post/:id">
        <Post />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </>
  );
}

export default App;
