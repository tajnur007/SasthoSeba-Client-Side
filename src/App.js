import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Appoinment from './components/Appoinment/Appoinment';
import Contacts from './components/Contacts/Contacts';
import Doctors from './components/Doctors/Doctors';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import DoctorDetails from './components/DoctorDetails/DoctorDetails';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const UserNameContext = createContext('');

function App() {
  const [userName, setUserName] = useState('');

  const user = {
    "userName": { userName },
    "setUserName": { setUserName }
  };

  return (
    <UserNameContext.Provider value={user}>
      <div className="App">

        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <PrivateRoute exact path="/doctors">
              <Doctors />
            </PrivateRoute>
            <PrivateRoute exact path="/appoinment">
              <Appoinment />
            </PrivateRoute>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contacts">
              <Contacts />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/service/:id">
              <ServiceDetails />
            </PrivateRoute>
            <PrivateRoute exact path="/doctor/:id">
              <DoctorDetails />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>

      </div >

    </UserNameContext.Provider>
  );
}

export default App;
