import "./description.css";

export default function ShortDesciption({
    link,
    description,
}: {
    link: `#${string}`;
    description?: string
}) {
    if(!description) {
        return null;
    }

    return (
        <div className="description">
            <div className="description__inner">
                <p className="description__text">
                    {description}
                </p>
            </div>
            <a href={link} className="description__toggle-button">
                Show more
            </a>
        </div>
    )
}