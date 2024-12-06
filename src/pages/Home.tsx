import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="h-full"
    style={{
      backgroundImage: "url('/images/lotusbg.png')", 
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
    }}>
      <section className="flex flex-col items-center justify-center h-full px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-50">
            Välkommen till Phun Thai Massage Helsingborg
          </h1>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/services"
              className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#522424] transition duration-300"
            >
              Tjänster och Priser
            </Link>
            <Link
              to="/contact"
              className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#522424] transition duration-300"
            >
              Har du frågor? Kontakta mig!
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
