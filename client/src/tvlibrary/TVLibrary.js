import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';

import ExplorePage from './pages/ExplorePage';
import MoviePage from './pages/MoviePage';
import DevelopmentPage from './pages/DevelopmentPage';

const TVLibrary = () => {
    return(
        <Router>
            <Nav />
            <div className="header-gap"></div>
            <div className="content">
                <Switch>
                    <Route path="/" exact component={ExplorePage} />
                    <Route path="/movie/:id" component={MoviePage} />
                    <Route path="/watchlists" component={DevelopmentPage} />
                    <Route path="/login" component={DevelopmentPage} />
                    <Route path="/signup" component={DevelopmentPage} />
                </Switch>
            </div>
        </Router>
    );
}

export default TVLibrary;