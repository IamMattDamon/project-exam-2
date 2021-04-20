import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navigation from "./components/layout/Navigation";
import Home from "./components/pages/Home";
import Accommodation from "./components/pages/Accommodation";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import Admin from "./components/pages/Admin";
import { AuthProvider } from "./context/AuthContext";
import "./sass/style.scss";

function App() {
  return (
    <>
    <AuthProvider>
      <Router>
        <Navigation />
          <Container>
            <Route path="/" exact component={Home}></Route>
            <Route path="/accommodation">
              <Accommodation />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
          </Container>
      </Router>
    </AuthProvider>
    </>
  );
}

export default App;
