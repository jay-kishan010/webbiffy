const clients = [
    { name: "Google", logo: "/google.png" },
    { name: "Microsoft", logo: "/microsoft.png" },
    { name: "Facebook", logo: "/facebook.png" },
  ];
  
  export default function Clients() {
    return (
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-green-400 text-center">Our Clients</h2>
        <div className="flex justify-center space-x-8 mt-6">
          {clients.map((client, index) => (
            <img key={index} src={client.logo} alt={client.name} className="h-16" />
          ))}
        </div>
      </section>
    );
  }
  