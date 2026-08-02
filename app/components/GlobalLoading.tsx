import "@styles/global-loading.css";
import { FaCircle } from "react-icons/fa";

export default function Loading() {

    return (
        <div className="global-loading">
            <div className="loading">
                <span className="loading__item loading__item_1">
                    <FaCircle className="loading__icon" />
                </span>
                <span className="loading__item loading__item_2">
                    <FaCircle className="loading__icon" />
                </span>
                <span className="loading__item loading__item_3">
                    <FaCircle className="loading__icon" />
                </span>
            </div>
        </div>
    )

}