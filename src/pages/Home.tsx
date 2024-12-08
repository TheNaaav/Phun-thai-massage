import About from "./About";
import Contact from "./Contact";
import { Services } from "./Services";

export const Home = () => {
  return (
    <div className="h-full text-zinc-50 py-10"
    style={{
      backgroundImage: "url('/images/lotusbg.png')", 
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
    }}>
      <section className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-50">
            Välkommen till Phun Thai Massage Helsingborg
          </h1>
        </div>
        <Services/>
        <About/>
        <Contact/>
      </section>
    </div>
  );
};
