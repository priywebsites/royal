import { motion } from "framer-motion";
import { Calendar, Scissors, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const handleBookAppointment = () => {
    window.location.href = "tel:+16158774267";
  };

  const handleViewServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center parallax-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`,
      }}
    >
      <div className="text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-playfair text-5xl md:text-7xl font-bold mb-6"
        >
          ROYAL CUTS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-playfair text-xl md:text-2xl mb-4"
        >
          BARBERSHOP
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-inter text-lg md:text-xl mb-8"
        >
          Where Precision Meets Premium Style
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={handleBookAppointment}
            className="btn-royal text-white px-8 py-4 rounded-full font-oswald font-medium text-lg hover:scale-105 transition-transform"
          >
            <Calendar className="mr-2 h-5 w-5" />
            BOOK APPOINTMENT
          </Button>
          <Button
            onClick={handleViewServices}
            variant="outline"
            className="border-2 border-white text-white bg-transparent px-8 py-4 rounded-full font-oswald font-medium text-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            <Scissors className="mr-2 h-5 w-5" />
            VIEW SERVICES
          </Button>
        </motion.div>
      </div>

      {/* Floating Chevron */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="text-white text-2xl" />
        </motion.div>
      </motion.div>
    </section>
  );
}
