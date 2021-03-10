import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import ExplorePage from './pages/Explore';

const TVLibrary = () => {
    return(
        <Router>
            <Nav />
            <div className="header-gap"></div>
            <div className="content">
                <Switch>
                    <Route path="/" exact component={ExplorePage} />
                </Switch>
            </div>
        </Router>
    );
}

export default TVLibrary;