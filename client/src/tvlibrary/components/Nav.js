import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <header className="header">
            <nav className="container">
                <div className="logo-wrapp">
                    <Link to="/" className="logo">TVLibrary</Link>
                </div>
                <ul className="nav-list">
                    <li><Link className="nav-link" to="/">Explore</Link></li>
                    <li><Link className="nav-link" to="/watchlists">Watchlists</Link></li>
                    <li><Link className="nav-link" to="/login">Login</Link></li>
                    <li><Link className="nav-link" to="/signup"><div className="nav-btn">Signup</div></Link></li>
                </ul>
            </nav>  
        </header>
    );
}

export default Nav;