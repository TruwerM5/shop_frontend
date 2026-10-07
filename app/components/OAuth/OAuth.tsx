import { FaGithub } from "react-icons/fa";
import { FaYandex } from "react-icons/fa";
import { oauthGitHub, oauthYandex } from "~/api/auth.api";
import "./oauth.css";
import Button from "../Button/Button";

const oauthServices = [
    {
        id: 1,
        name: 'GitHub',
        onClick: oauthGitHub,
        icon: <FaGithub />,
    },
    {
        id: 2,
        name: 'Yandex ID',
        onClick: oauthYandex,
        icon: <FaYandex />,
    },
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