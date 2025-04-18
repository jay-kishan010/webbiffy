"use client";

import { useInView } from "react-intersection-observer";
import {
  FaReact, FaNodeJs, FaPhp, FaJava, FaDocker, FaAws, FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs, SiVuedotjs, SiKubernetes, SiAngular, SiTailwindcss, SiDotnet,
  SiMongodb, SiPostgresql, SiMysql, SiRedis, SiFirebase
} from "react-icons/si";
import { IoLogoPython } from "react-icons/io";
import { VscAzure } from "react-icons/vsc";

export default function TechStack() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const techStack = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", icon: <FaReact size={32} className="text-blue-500" /> },
        { name: "Next.js", icon: <SiNextdotjs size={32} className="text-black" /> },
        { name: "Vue.js", icon: <SiVuedotjs size={32} className="text-green-500" /> },
        { name: "Angular", icon: <SiAngular size={32} className="text-red-600" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={32} className="text-teal-400" /> },
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", icon: <FaNodeJs size={32} className="text-green-600" /> },
        { name: "Python", icon: <IoLogoPython size={32} className="text-blue-400" /> },
        { name: "PHP", icon: <FaPhp size={32} className="text-indigo-600" /> },
        { name: "Java", icon: <FaJava size={32} className="text-orange-500" /> },
        { name: ".NET", icon: <SiDotnet size={32} className="text-purple-500" /> },
      ]
    },
    {
      category: "Database",
      technologies: [
        { name: "MongoDB", icon: <SiMongodb size={32} className="text-green-700" /> },
        { name: "PostgreSQL", icon: <SiPostgresql size={32} className="text-blue-600" /> },
        { name: "MySQL", icon: <SiMysql size={32} className="text-blue-400" /> },
        { name: "Redis", icon: <SiRedis size={32} className="text-red-500" /> },
        { name: "Firebase", icon: <SiFirebase size={32} className="text-yellow-500" /> },
      ]
    },
    {
      category: "DevOps & Cloud",
      technologies: [
        { name: "AWS", icon: <FaAws size={32} className="text-orange-500" /> },
        { name: "Docker", icon: <FaDocker size={32} className="text-blue-500" /> },
        { name: "Kubernetes", icon: <SiKubernetes size={32} className="text-blue-400" /> },
        { name: "GitHub", icon: <FaGithub size={32} className="text-gray-800" /> },
        { name: "Azure", icon: <VscAzure size={32} className="text-blue-700" /> },
      ]
    }
  ];

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 relative inline-block after:absolute after:w-16 after:h-1 after:bg-[#3d7ce5] after:-bottom-2 after:left-1/2 after:-translate-x-1/2">
            Our Tech Stack
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            We leverage the most powerful and modern technologies to build scalable, efficient, and future-proof solutions.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {techStack.map((stack, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center lg:text-left text-[#0a1e36]">
                {stack.category}
              </h3>
              <div className="grid grid-cols-3 gap-4 justify-items-center">
                {stack.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    aria-label={tech.name}
                  >
                    <div className="mb-2">{tech.icon}</div>
                    <span className="text-sm font-medium text-gray-700 text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
