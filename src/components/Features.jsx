
// components/Features.jsx
"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";

const features = [
  { number: "1", title: "Cutting-Edge Technology", description: "We leverage the latest technologies and frameworks to build scalable and future-proof solutions." },
  { number: "2", title: "Expert Team", description: "Our team of seasoned professionals brings decades of combined experience across various industries." },
  { number: "3", title: "Client-Focused Approach", description: "We prioritize your business goals and tailor our solutions to meet your specific needs." },
  { number: "4", title: "Proven Track Record", description: "Our portfolio showcases successful projects across diverse sectors and technologies." },
];

export default function Features() {
  const { ref: imageRef, inView: imageInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: contentRef, inView: contentInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={imageRef}
            className={`transition-all duration-1000 ${imageInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <Image 
              src="/bg.jpg" 
              alt="Technology Features"
              width={500}
              height={400}
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          <div ref={contentRef}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-1000 
                          ${contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Why Choose Webbiify Infotech?
            </h2>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`flex gap-6 transition-all duration-1000
                             ${contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="w-12 h-12 bg-[#3d7ce5] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {feature.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
