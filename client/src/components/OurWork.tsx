import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function OurWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const workImages = [
    {
      url: "/attached_assets/Screenshot 2025-07-31 at 10.00.42 AM_1753974204311.png",
      alt: "Fresh fade haircut",
    },
    {
      url: "/attached_assets/Screenshot 2025-07-31 at 10.00.59 AM_1753974204311.png",
      alt: "Precision beard trim",
    },
    {
      url: "/attached_assets/Screenshot 2025-07-31 at 10.01.40 AM_1753974204311.png",
      alt: "Modern haircut styling",
    },
    {
      url: "/attached_assets/Screenshot 2025-07-31 at 10.02.00 AM_1753974204311.png",
      alt: "Classic gentleman's cut",
    },
  ];

  return (
    <section id="work" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="font-space text-4xl md:text-5xl font-bold mb-6 text-black"
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
            Our Work
          </motion.h2>
          <motion.p 
            className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto"
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            See the artistry and craftsmanship in action
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
              animate={
                isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.5, rotateY: 180 }
              }
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.08,
                y: -10,
                rotateY: 5
              }}
              style={{
                boxShadow: "0 20px 40px rgba(0, 123, 255, 0.3)"
              }}
              className="overflow-hidden rounded-xl shadow-2xl gradient-border relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              />
              <motion.img
                src={image.url}
                alt={image.alt}
                className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-110"
                whileHover={{ filter: "brightness(1.1) contrast(1.1)" }}
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              >
                <p className="text-white font-poppins font-medium">{image.alt}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
