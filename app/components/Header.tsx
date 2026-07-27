export default function Header({children}: { children: React.ReactElement }) {
    
    return (
        <header className="header p-4 bg-zinc-300">
            {children}
        </header>
    )    
}

