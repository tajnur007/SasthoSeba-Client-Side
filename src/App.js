import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Appoinment from './components/Appoinment/Appoinment';
import Contacts from './components/Contacts/Contacts';
import Doctors from './components/Doctors/Doctors';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/Doctors">
            <Doctors />
          </Route>
          <Route exact path="/appoinment">
            <Appoinment />
          </Route>
          <Route exact path="/faq">
            <Faq />
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
