import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Home from "./components/pages/Home";
import Accommodations from "./components/pages/Accommodations";
import AccommodationDetail from "./components/accommodations/AccommodationDetail";
import ActivitiesDetail from "./components/activities/ActivitiesDetail";
import Enquiry from "./components/pages/Enquiry";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import Admin from "./components/pages/Admin";
import ContactPostList from "./components/admin/ContactPostList";
import EnquiryPostList from "./components/admin/EnquiryPostList";
import CreateAccommodation from "./components/admin/CreateAccommodation";
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
              <Route exact path="/accommodations">
                <Accommodations />
              </Route>
              <Route path="/accommodations/:id">
                <AccommodationDetail />
              </Route>
              <Route path="/activities/:id">
                <ActivitiesDetail />
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
              <Route path="/admin/messages">
                <ContactPostList />
              </Route>
              <Route path="/admin/enquiries">
                <EnquiryPostList />
              </Route>
              <Route path="/admin/create">
                <CreateAccommodation />
              </Route>
            </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
