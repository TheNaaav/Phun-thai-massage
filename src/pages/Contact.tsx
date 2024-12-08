import { FaFacebook } from 'react-icons/fa'; 

export default function Contact() {
  return (
    <div>
      <div className="flex-grow container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-3xl font-bold text-center mb-8">Kontakta Oss</h2>
        <p className="text-center mb-6 font-bold">
          För att boka en tid eller ställa frågor, vänligen ring oss alltid innan på följande nummer:
        </p>
        <div className="flex justify-center items-center mb-6">
          <p className="text-xl md:text-2xl font-bold text-center">
            📞 <a href="tel:+46739876255" className="text-blue-600 hover:underline">+46 73 987 62 55</a>
          </p>
        </div>
        <div className="flex justify-center items-center mb-6">
          <a 
            href="https://www.facebook.com/p/Plantering-Thai-Massage-100083172946605/"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:underline text-lg md:text-xl"
          >
            <FaFacebook className="mr-2 text-xl" />
            Följ oss på Facebook
          </a>
        </div>

         {/* Address Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Vi finns på detta Adress</h3>
          <p className="text-lg font-bold">Planteringsvägen 95, 252 30 Helsingborg </p>
        </div>

          {/* Google Maps Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center mb-4">Hitta hit</h3>
          <div className="w-full h-64">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4459.882240373986!2d12.720119799999999!3d56.019692199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652330a8b0fc89f%3A0x7d8ec0c1a2a4b0b7!2sPhun%20Thai%20Massage!5e0!3m2!1ssv!2sse!4v1733496530210!5m2!1ssv!2sse"
              className="w-full h-full rounded-lg shadow-md"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
        
        {/* Opening Hours Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Öppettider</h3>
          <p className="text-lg font-bold">Måndag-Fredag: 10:00 - 19:00</p>
          <p className="text-lg font-bold">Lördag: 11:00 - 19:00</p>
          <p className="text-lg font-bold">Övriga tider enligt överenskommelse</p>
          <p className='text-lg font-bold'>Ring gärna innan så slipper ni vänta</p>
        </div>
      </div>
    </div>
  );
}
