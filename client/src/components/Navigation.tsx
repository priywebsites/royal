import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Our Work" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Find Us" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookNow = () => {
    window.location.href = "tel:+16158774267";
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/95 backdrop-blur-md" : "bg-black/90"
        } border-b border-gray-800`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex-shrink-0"
            >
              <motion.h1 
                className="text-white font-space text-xl font-bold tracking-wider"
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
                Royal Cuts
              </motion.h1>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="hidden md:flex space-x-8"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-white hover:text-blue-400 transition-all duration-300 font-poppins font-medium relative"
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 8px rgba(0, 123, 255, 0.8)"
                  }}
                >
                  {item.label}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="hidden md:block"
            >
              <Button
                onClick={handleBookNow}
                className="btn-blue text-white px-6 py-2 rounded-full font-space font-semibold hover:scale-105 transition-transform"
              >
                BOOK NOW
              </Button>
            </motion.div>

            {/* Mobile Hamburger */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="md:hidden"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(true)}
                className="text-white hover:text-gray-300 hover:bg-white/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-black z-50 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-white text-2xl hover:text-gray-300 transition-colors"
              >
                <X className="h-8 w-8" />
              </motion.button>

              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-white text-2xl font-space font-semibold hover:text-blue-400 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    textShadow: "0 0 15px rgba(0, 123, 255, 0.8)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8"
              >
                <Button
                  onClick={handleBookNow}
                  className="btn-blue text-white px-8 py-3 rounded-full font-space font-semibold text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  BOOK NOW
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
