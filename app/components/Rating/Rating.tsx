import "./rating.css";
import starEmpty from "@images/star-empty.svg";
import starFilled from "@images/star-filled.svg";

export default function Rating({
    rating
}: {
    rating: number;
}) {
    let startFrom = rating;
    const result: number[] = [];
    for(let i = 0; i < 5; i++) {
        if(startFrom > 1) {
            result.push(100);
        } else {
            result.push(startFrom * 100)
        }
        startFrom = startFrom - 1;
    }

    const beautifiedValue = () => {
        const rounded = Math.round(rating);
        if(rounded === rating) {
            return `${rounded}.0`;
        }
        return rating;
    }

    return (
        <div className="rating">
            <span className="rating__value">{beautifiedValue()}</span>
            <div className="rating__stars">
                {result.map((value, index) => {
                    return (
                    <span key={index} className="rating__star">
                        <img
                            src={starEmpty}
                            alt="empty"
                            className="rating__star-icon"
                        />
                        <img
                            src={starFilled}
                            alt="filled"
                            className="rating__star-icon rating__star-icon_filled"
                            style={{clipPath: `inset(0px ${100 - value}% 0px 0px)`}}
                        />
                    </span>
                )
                })}
            </div>
        </div>
    )
}