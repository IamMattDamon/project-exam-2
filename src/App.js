import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Accommodation from "./components/pages/Accommodation";
import Enquiry from "./components/pages/Enquiry";
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
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/accommodation">
                <Accommodation />
              </Route>
              <Route path="/detail/:param">
                <AccommodationDetail />
              </Route>
              <Route path="/enquiry">
                <Enquiry />
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
            </Switch>
        </Router>
      </AuthProvider>
      <Footer className="mt-5"/>
    </>
  );
}

export default App;
