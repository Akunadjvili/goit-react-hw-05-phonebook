import { BrowserRouter } from 'react-router-dom';

import { Route, Switch, Redirect } from 'react-router-dom';

import PhoneBook from './components/PhoneBook';
import routes from 'routes';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={PhoneBook} />
        {/* <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.movies} component={MoviesPage} /> */}
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
