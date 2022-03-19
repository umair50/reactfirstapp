import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router , Route,Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import Notfound from './NotFound';
import ContactUs from './Contatus';
import { Provider } from 'react-redux';
import store from "./store";

function App() {
  return (
  
    <Provider store={store}>
    <Router>
    <div className="App">
        <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="*">
            <Notfound/>
          </Route>
        </Switch>

     
      </div>
    </div>
    
    </Router>
    </Provider>
  );
}

export default App;
