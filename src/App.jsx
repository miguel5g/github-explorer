import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FavoriteRepositories from './pages/FavoriteRepositories';
import NotFound from './pages/NotFound';
import Repositories from './pages/Repositories';
import Search from './pages/Search';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/repositories/favorites" component={FavoriteRepositories} />
        <Route path="/repositories/:login" component={Repositories} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
