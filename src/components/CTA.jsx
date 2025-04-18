// components/CTA.jsx
"use client";

import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function CTA() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-20 bg-gradient-to-br from-[#0a1e36] to-[#1e3a5a] text-white text-center">
      <div className="container mx-auto px-4" ref={ref}>
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-1000 
                       ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Ready to Transform Your Digital Presence?
        </h2>
        <p className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-200
                      ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Let&apos;s collaborate to bring your vision to life with our innovative solutions and expert team.
        </p>
        <Link 
          href="#contact"
          className={`inline-block px-8 py-3 bg-[#3d7ce5] text-white rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg transition-all duration-1000 delay-400
                     ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Get Started Today
        </Link>
      </div>
    </section>
  );
}
