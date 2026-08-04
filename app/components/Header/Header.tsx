import "./header.css";

export default function Header({children}: { children: React.ReactElement }) {
    
    return (
        <header className="header">
            <img src="/logo.png" alt="NovaMarket" className="header__logo" />            
            {children}
        </header>
    )    
}

