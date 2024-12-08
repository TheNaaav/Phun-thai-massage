export default function Header() {
    return (
        <header className="p-4 bg-cover bg-center relative bg-purple-500">
            <div className="container mx-auto flex items-center justify-between text-zinc-50">
                {/* Logo and Title */}
                <a href="#home" className="text-2xl flex items-center font-bold gap-4">
                    <img src="/images/lotus.png" alt="Sathon Thai Massage logo" className="w-10 h-10" />
                    Phun Thai Massage
                </a>
            </div>
        </header>
    );
}
