import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header
            className="p-4 bg-cover bg-center relative bg-purple-500"
        >
            <div className="container mx-auto flex items-center justify-between text-zinc-50">
                {/* Logo and Title */}
                <Link to="/" className="text-2xl flex items-center font-bold gap-4">
                    <img src="/images/lotus.png" alt="Sathon Thai Massage logo" className="w-10 h-10" />
                    Phun Thai Massage
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-2xl"
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    &#9776;
                </button>

                {/* Navigation Menu */}
                <nav
                    className={`fixed inset-0 z-50 bg-gray-900 bg-opacity-90 transform transition-transform duration-300 md:static md:bg-transparent md:h-auto md:w-auto md:transform-none ${
                        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                    aria-hidden={!isMenuOpen}
                >
                    <ul className="flex flex-col items-center justify-center space-y-6 mt-20 md:mt-0 md:space-y-0 md:flex-row md:space-x-6 text-white md:text-white">
                        <li>
                            <Link
                                to="/"
                                className="block py-2 md:py-0 hover:underline font-bold"
                                onClick={closeMenu}
                            >
                                Hem
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services"
                                className="block py-2 md:py-0 hover:underline font-bold"
                                onClick={closeMenu}
                            >
                                Tjänster
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="block py-2 md:py-0 hover:underline font-bold"
                                onClick={closeMenu}
                            >
                                Om Oss
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="block py-2 md:py-0 hover:underline font-bold"
                                onClick={closeMenu}
                            >
                                Kontakt & Boka
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
