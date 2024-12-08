import { servicesList, prices } from '../data';


export const Services = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Våra Tjänster
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-sm md:text-base font-bold">
          Vi erbjuder ett brett utbud av massagebehandlingar för att främja din hälsa och ditt välbefinnande. Välj en behandling som passar dina behov.
        </p>
        
        {/* Lägger till sektionen för tjänster */}
        <div className="grid gap-8 md:grid-cols-2 justify-center">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="bg-purple-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className="h-16 w-16 mx-auto mb-4"
              />
              <h3 className="text-lg md:text-xl font-semibold text-center text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Lägger till sektionen för priser */}
        <div className="py-10">
          <h3 className="text-2xl font-bold text-center mb-6">
            Priser för tjänster 2024
          </h3>
          <p className="text-center max-w-2xl mx-auto mb-12 text-sm md:text-base font-bold">
            Oavsett vilken tjänst du väljer, kostar de alla samma:
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            {prices.map((price, index) => (
              <div
                key={index}
                className={`${price.color} p-4 rounded-lg shadow-md w-64 transition-transform transform hover:scale-105`}
              >
                <h4 className="text-xl font-semibold text-center">
                  {price.duration}
                </h4>
                <p className="text-center font-bold">{price.amount} kr</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
