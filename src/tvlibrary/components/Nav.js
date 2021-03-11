import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <header className="header">
            <nav className="container">
                <div className="logo-wrapp">
                    <p className="logo">TVLibrary</p>
                </div>
                <ul className="nav-list">
                    <li><Link className="nav-link" to="/">Explore</Link></li>
                    <li><Link className="nav-link" to="/">Watchlists</Link></li>
                    <li><Link className="nav-link" to="/">Login</Link></li>
                    <li><Link className="nav-link" to="/">Signup</Link></li>
                </ul>
            </nav>  
        </header>
    );
}

export default Nav;