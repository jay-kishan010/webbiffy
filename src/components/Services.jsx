// components/Services.jsx
"use client";

import { useInView } from "react-intersection-observer";

const services = [
  { icon: "⚡", title: "Web Development", description: "Custom web development solutions built with the latest technologies to deliver exceptional user experiences." },
  { icon: "📱", title: "Mobile Applications", description: "Native and cross-platform mobile applications that engage users and deliver value on every screen." },
  { icon: "🔍", title: "SEO & Marketing", description: "Strategic digital marketing and SEO services to increase visibility and drive targeted traffic." },
  { icon: "🎨", title: "UI/UX Design", description: "User-centered design that balances aesthetics with functionality to create intuitive digital experiences." },
  { icon: "🛒", title: "E-Commerce Solutions", description: "Scalable e-commerce platforms that drive sales and provide seamless shopping experiences." },
  { icon: "🔒", title: "Cybersecurity", description: "Comprehensive security solutions to protect your digital assets and ensure data integrity." },
];

export default function Services() {
  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: gridRef, inView: gridInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block after:absolute after:w-16 after:h-1 after:bg-[#3d7ce5] after:-bottom-2 after:left-1/2 after:-translate-x-1/2">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help businesses thrive in the digital landscape.
          </p>
        </div>
        
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg p-8 shadow-md relative overflow-hidden transition-all duration-1000 hover:-translate-y-2 hover:shadow-xl group
                         ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                         before:absolute before:top-0 before:left-0 before:w-full before:h-0 before:bg-gradient-to-br before:from-[#0a1e36] before:to-[#1e3a5a] before:transition-all before:duration-500
                         hover:before:h-full`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative z-10">
                <div className="text-4xl mb-6 text-[#3d7ce5] group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-white transition-colors duration-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
