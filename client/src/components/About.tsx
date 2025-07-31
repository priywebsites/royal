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
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 45, scale: 0.8 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0, scale: 1 } : { opacity: 0, x: -50, rotateY: 45, scale: 0.8 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 80 }}
            className="relative group"
          >
            <motion.div
              className="absolute -inset-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 rounded-2xl blur-xl opacity-40 group-hover:opacity-70"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.div
              className="relative"
              whileHover={{ 
                scale: 1.05, 
                rotateY: 8,
                rotateX: 5,
                z: 30
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.img
                src="/work/Screenshot 2025-07-31 at 10.04.56 AM_1753974799408.png"
                alt="Royal Cuts Barbershop Interior"
                className="relative rounded-xl shadow-2xl w-full h-auto border-2 border-blue-400/40"
                animate={{
                  y: [0, -8, 0],
                  boxShadow: [
                    "0 20px 40px rgba(0, 123, 255, 0.3)",
                    "0 30px 60px rgba(0, 123, 255, 0.5)",
                    "0 20px 40px rgba(0, 123, 255, 0.3)"
                  ]
                }}
                transition={{
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute top-4 right-4 w-4 h-4 bg-blue-500 rounded-full"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.5, 1, 0.5],
                  boxShadow: [
                    "0 0 0px rgba(0, 123, 255, 0.5)",
                    "0 0 20px rgba(0, 123, 255, 0.8)",
                    "0 0 0px rgba(0, 123, 255, 0.5)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>

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
