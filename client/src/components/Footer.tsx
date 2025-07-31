import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Clock, Instagram } from "lucide-react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Our Work" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="font-space text-2xl font-bold mb-4"
              animate={{
                textShadow: [
                  "0 0 5px rgba(0, 123, 255, 0.3)",
                  "0 0 10px rgba(0, 123, 255, 0.6)",
                  "0 0 5px rgba(0, 123, 255, 0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Royal Cuts Barbershop
            </motion.h3>
            <p className="text-gray-400 mb-4 font-poppins">
              Where Precision Meets Premium Style
            </p>
            <motion.a
              href="https://www.instagram.com/royalcutsoffical/?__d=11%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 font-poppins font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-5 h-5" />
              Follow us on Instagram
            </motion.a>
            <p className="text-gray-400">
              103 Jefferson St
              <br />
              Smyrna, TN 37167
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-space text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <motion.button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors font-poppins"
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    {link.label}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-space text-lg font-semibold mb-4">
              Contact Info
            </h4>
            <ul className="space-y-2">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <a
                  href="tel:+16158774267"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  +1 (615) 877-4267
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-gray-400 flex items-center gap-2"
              >
                <Clock className="w-4 h-4" />
                Mon-Thu, Sat: 9AM-6PM
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.4, delay: 0.5 }}
                className="text-gray-400 flex items-center gap-2"
              >
                <Clock className="w-4 h-4" />
                Fri: 2PM-6PM
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.4, delay: 0.6 }}
                className="text-gray-400 flex items-center gap-2"
              >
                <Clock className="w-4 h-4" />
                Sun: Closed
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2024 Royal Cuts Barbershop. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
