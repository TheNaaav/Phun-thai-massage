import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-purple-500 p-8 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center md:space-x-6">
        <p className="text-lg font-semibold">
          © 2024{' '}
          <a 
            href="https://www.linkedin.com/in/naruebet-singsathon-7b8337158/" 
            className="hover:underline" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Made by Navi™
          </a>
        </p>

          {/* Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/about" className="hover:underline">
              Om Mig
            </Link>
            <Link to="/services" className="hover:underline">
              Tjänster
            </Link>
            <Link to="/contact" className="hover:underline">
              Kontakt
            </Link>
          </div>
        </div>

        {/* Center Section - Social Media */}
        <div className="flex space-x-6 mt-6 md:mt-0">
          <a href="https://www.facebook.com" aria-label="Facebook" className="hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}