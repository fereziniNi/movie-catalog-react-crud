import { Link, useLocation } from 'react-router-dom';

export default function MenuLink({ children, to }) {
    const loc = useLocation();
    return (
        <Link className={`${loc.pathname}`} to={to}>
            {children}
        </Link>
    )
}