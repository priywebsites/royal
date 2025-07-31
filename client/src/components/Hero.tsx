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
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #007BFF 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, #007BFF 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, #007BFF 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, #007BFF 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full opacity-60"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-6 h-6 border-2 border-blue-400 rotate-45 opacity-40"
        animate={{
          y: [0, 40, 0],
          rotate: [45, 225, 45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-3 h-3 bg-white rounded-full opacity-30"
        animate={{
          y: [0, -50, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-8 h-8 border border-blue-300 rounded-full opacity-20"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="text-center text-white px-4 max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="mb-6"
        >
          <motion.h1
            className="font-space text-6xl md:text-8xl font-bold mb-4 text-gradient"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ROYAL CUTS
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
          className="mb-4"
        >
          <motion.p
            className="font-poppins text-xl md:text-3xl font-light tracking-wider"
            animate={{
              textShadow: [
                "0 0 10px rgba(0, 123, 255, 0.5)",
                "0 0 20px rgba(0, 123, 255, 0.8)",
                "0 0 10px rgba(0, 123, 255, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            BARBERSHOP
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
          className="mb-8"
        >
          <motion.p
            className="font-poppins text-lg md:text-xl font-light"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Where Precision Meets Premium Style
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.1, type: "spring", stiffness: 100 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              onClick={handleBookAppointment}
              className="btn-royal text-white px-10 py-5 rounded-full font-space font-semibold text-lg pulse-glow"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="mr-3"
              >
                <Calendar className="h-6 w-6" />
              </motion.div>
              BOOK APPOINTMENT
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              onClick={handleViewServices}
              className="btn-blue text-white px-10 py-5 rounded-full font-space font-semibold text-lg gradient-border"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="mr-3"
              >
                <Scissors className="h-6 w-6" />
              </motion.div>
              VIEW SERVICES
            </Button>
          </motion.div>
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
