import { Link } from "react-router-dom";
import META from './meta';
import './style.css';

export default function Header() {
    return (
        <nav className='navigation'>

            <Link to={'/'} className="logo">
                {META.LOGO}
            </Link>

            <div className="navigation-menu">
                <ul>{META.NAVBUTTONS.map((button) => {
                    return (
                        <li key={button.id}>
                            <Link className="link" to={button.route}>
                                {button.name}
                            </Link>
                        </li>
                    );
                })}</ul>
            </div>
            
        </nav>
    );
};
