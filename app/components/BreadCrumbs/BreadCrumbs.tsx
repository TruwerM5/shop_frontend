import { NavLink } from "react-router";
import "./breadcrumbs.css";
interface BreadCrumbsProps {
    paths: {
        id: number;
        title: string;
        href: string;
        isActive?: boolean;
    }[];
}
export default function BreadCrumbs({
    paths
}: BreadCrumbsProps) {

    return (
        <div className="breadcrumbs">
            <ul className="breadcrumbs__list">
                {paths.map(path => (
                    <li key={path.id} className="breadcrumb-item">
                        <NavLink 
                            to={path.href}
                            className={() => [
                                "breadcrumb-link",
                                path.isActive ? "active" : "",
                            ].join(" ")}
                        >
                            {path.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )

}