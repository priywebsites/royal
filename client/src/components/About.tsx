import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleCallNow = () => {
    window.location.href = "tel:+16158774267";
  };

  return (
    <section id="about" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/images/barbershop-interior.png"
              alt="Royal Cuts Barbershop Interior"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-space text-4xl md:text-5xl font-bold mb-6 text-black"
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 5px rgba(0, 123, 255, 0.2)",
                    "0 0 10px rgba(0, 123, 255, 0.4)",
                    "0 0 5px rgba(0, 123, 255, 0.2)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                About Royal Cuts
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-poppins text-lg text-gray-700 mb-6 leading-relaxed"
            >
              Located in the heart of Smyrna, Tennessee, Royal Cuts Barbershop
              delivers precision cuts and expert grooming. Our skilled barbers
              blend traditional techniques with modern style, ensuring every
              client leaves looking and feeling like royalty.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-poppins text-lg text-gray-700 mb-8 leading-relaxed"
            >
              With years of experience and a passion for perfection, we create
              more than just haircuts – we craft confidence and style that
              lasts.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  onClick={handleCallNow}
                  className="btn-blue text-white px-8 py-4 rounded-full font-space font-semibold text-lg pulse-glow"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="mr-2"
                  >
                    <Phone className="h-5 w-5" />
                  </motion.div>
                  CALL NOW
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
