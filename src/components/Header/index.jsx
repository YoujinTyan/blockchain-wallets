import { Link } from "react-router-dom";
import NavMenu from "../NavMenu";
import { navContent } from './meta';
import './style.css';

export default function Header() {
    return (
        <nav className='navigation'>
            <Link to={'/'} className="logo">
                {navContent.LOGO}
            </Link>
            <NavMenu 
                navLinks={navContent.NAVLINKS}
            />
            
        </nav>
    );
};
