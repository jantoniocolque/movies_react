
import './App.css';

import Navbar from './components/Navbar/Index';
import Home from './components/pages/Home';
import SearchResult from './components/pages/SearchResults';
import Detail from './components/pages/Detail';
import Favorites from './components/pages/Favorites';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/movies" component={SearchResult}/>
          <Route path="/movies/:id" component={Detail} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
