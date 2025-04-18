// components/Hero.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleCount = 30;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      size: Math.random() * 10 + 5,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="hero min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-[#0a1e36] to-[#1e3a5a]">
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white/20 animate-float"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transforming Ideas Into Digital Excellence
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Webbiify Infotech delivers cutting-edge web solutions that drive innovation and growth. Our team of experts creates digital experiences that captivate and convert.
          </p>
          <div className="flex gap-4">
            <Link 
              href="#services"
              className="px-8 py-3 bg-[#3d7ce5] text-white rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              Explore Services
            </Link>
            <Link 
              href="#contact"
              className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#0a1e36] hover:-translate-y-1 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
