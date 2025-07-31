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
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Professional barber at work"
              className="rounded-lg shadow-2xl scale-on-hover w-full h-auto"
            />
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
              className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-black"
            >
              About Royal Cuts
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-inter text-lg text-gray-700 mb-6 leading-relaxed"
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
              className="font-inter text-lg text-gray-700 mb-8 leading-relaxed"
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
              <Button
                onClick={handleCallNow}
                className="btn-royal text-white px-8 py-4 rounded-full font-oswald font-medium text-lg hover:scale-105 transition-transform"
              >
                <Phone className="mr-2 h-5 w-5" />
                CALL NOW
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
