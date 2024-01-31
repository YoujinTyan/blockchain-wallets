import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function NavMenu(props) {
    const { navLinks } = props;

    //TODO navLinks to memo to reduce rerenders
    const NavigationLinks = () => {
        return (
            <React.Fragment>
                {navLinks &&
                    navLinks.map((link) => (
                        <li key={link.id}>
                            <Link className="link" to={link.route}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
            </React.Fragment>
        );
    };

    return (
        <div className="navigation-menu">
            <ul>
                <NavigationLinks />
            </ul>
        </div>
    );
}
