import { Link } from "react-router-dom";
import {routes} from "../../routers/mainRouter";

export default function Blog() {
    return (
        <>
            <h2>Blog component</h2>
            <p><Link to={routes.wallets}>Wallets</Link></p>
            <p><Link to={routes.settings}>settings</Link></p>
            <p><Link to={routes.blog}>blog</Link></p>
        </>
    );
};
