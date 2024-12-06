import { useState } from 'react';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  
  return (
      <div 
        className="h-full text-black bg-purple-300"
      >
        <div className="flex-grow container mx-auto px-2 py-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
            Om oss
          </h2>
  
          {/* Vår Bakgrund */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-center mb-4">Vår Bakgrund</h3>
            <p className="text-center text-sm md:text-base">
              Vi <strong>Phun Thai Massage </strong> finns i Planteringsvägen 95 i Helsingborg, där vi erbjuder samma professionella behandlingar.
            </p>
          </div>
  
          {/* Erfarenhet */}
          <div>
            <h3 className="text-xl font-bold text-center mb-4">Utbildning & Erfarenhet</h3>
            <p className="text-center text-sm md:text-base">
              Har arbetat som massör sedan 2010 och har utvecklat en djup förståelse för olika tekniker och behandlingar som främjar hälsa och välbefinnande.
            </p>
          </div>
          <div className="flex justify-center items-center py-10">
          <img 
                src="/images/phunthai.jpg" 
                alt="Information about me" 
                className="w-72 h-72 cursor-pointer" 
                onClick={openModal} 
              />
            </div>
            {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={closeModal}>
              <img 
                src="/images/phunthai.jpg" 
                alt="Information about me" 
                className="max-w-full max-h-full"
              />
            </div>
            )}
        </div>
      </div>
    );
  }
  