import { FaGithub } from "react-icons/fa";
import { oauthGitHub } from "~/api/auth.api";
import "./oauth.css";
import Button from "../Button/Button";

const oauthServices = [
    {
        id: 1,
        name: 'GitHub',
        onClick: oauthGitHub,
        icon: <FaGithub />,
    }
];

export default function OAuth() {
    return (
        <div className="oauth">
            {oauthServices.map((service) => (
                    <Button
                        key={service.id}
                        onClick={service.onClick}
                        customClass="oauth__button"
                        type="button"
                        icon={service.icon}
                        text={`Continue with ${service.name}`}
                    />
            ))}
        </div>
    )
}