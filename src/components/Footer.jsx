// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a1e36] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 relative after:absolute after:w-10 after:h-1 after:bg-[#3d7ce5] after:-bottom-2 after:left-0">
              Webbiify Infotech
            </h3>
            <p className="text-gray-300">
              Transforming ideas into digital excellence through innovative web solutions and cutting-edge technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 relative after:absolute after:w-10 after:h-1 after:bg-[#3d7ce5] after:-bottom-2 after:left-0">
              Services
            </h3>
            <ul className="space-y-3">
              {["Web Development", "Mobile Applications", "UI/UX Design", "E-Commerce Solutions", "Cybersecurity"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-300 hover:text-[#3d7ce5] hover:translate-x-1 transition-all duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 relative after:absolute after:w-10 after:h-1 after:bg-[#3d7ce5] after:-bottom-2 after:left-0">
              Company
            </h3>
            <ul className="space-y-3">
              {["About Us", "Our Team", "Careers", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-300 hover:text-[#3d7ce5] hover:translate-x-1 transition-all duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 relative after:absolute after:w-10 after:h-1 after:bg-[#3d7ce5] after:-bottom-2 after:left-0">
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>123 Tech Street, Digital City</li>
              <li>+1 (555) 123-4567</li>
              <li>info@webbiify.com</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-gray-700">
          <p className="text-gray-400">&copy; 2025 Webbiify Infotech. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}