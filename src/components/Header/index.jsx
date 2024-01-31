import NavMenu from "../NavMenu";
import { navContent } from "./meta";
import { Link } from "react-router-dom";
import { paths } from "../../utils/constants";
import "./style.css";

export default function Header() {
    return (
        <nav className="navigation">
            <Link to={paths.HOME} className="logo">
                {navContent.LOGO}
            </Link>
            <NavMenu navLinks={navContent.NAVLINKS} />
        </nav>
    );
}
