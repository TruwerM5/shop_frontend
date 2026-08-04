import "./brand.css";

export default function Logo() {
    return (
        <div className="brand">
            <img src="/logo.png" alt="NovaMarket" className="brand__logo" />
            <h1 className="brand__name">NovaMarket</h1>
            <span className="brand__label">marketplace</span>
        </div>
    )
}