import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from './pages/Search';
import Repositories from './pages/Repositories';
import FavoriteRepositories from './pages/FavoriteRepositories';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/repositories/favorites" component={FavoriteRepositories} />
        <Route exact path="/repositories/:login" component={Repositories} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
