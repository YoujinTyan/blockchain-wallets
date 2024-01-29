import { Link } from "react-router-dom";
import './style.css';

export default function NavMenu(props) {
    const { navLinks } = props;
    return (
        <div className="navigation-menu">
            <ul>{navLinks.map((link) => {
                return (
                    <li key={link.id}>
                        <Link className="link" to={link.route}>
                            {link.name}
                        </Link>
                    </li>
                );
            })}</ul>
        </div>
    );
};
