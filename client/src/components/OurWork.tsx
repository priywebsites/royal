import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function OurWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const workImages = [
    {
      url: "/images/Screenshot 2025-07-31 at 10.00.42 AM_1753974204311.png",
      alt: "Fresh fade haircut",
    },
    {
      url: "/images/Screenshot 2025-07-31 at 10.00.59 AM_1753974204311.png",
      alt: "Precision beard trim",
    },
    {
      url: "/images/Screenshot 2025-07-31 at 10.01.40 AM_1753974204311.png",
      alt: "Modern haircut styling",
    },
    {
      url: "/images/Screenshot 2025-07-31 at 10.02.00 AM_1753974204311.png",
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
              initial={{ opacity: 0, scale: 0.3, rotateY: 180, rotateX: 45 }}
              animate={
                isInView ? { opacity: 1, scale: 1, rotateY: 0, rotateX: 0 } : { opacity: 0, scale: 0.3, rotateY: 180, rotateX: 45 }
              }
              transition={{ 
                duration: 1.2, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 120,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.12,
                y: -15,
                rotateY: 8,
                rotateX: 3,
                z: 50
              }}
              style={{
                transformStyle: "preserve-3d"
              }}
              className="overflow-hidden rounded-2xl shadow-2xl gradient-border relative group cursor-pointer"
            >
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-60"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-2xl"
                animate={{
                  background: [
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.2) 100%)",
                    "linear-gradient(135deg, rgba(147, 51, 234, 0.3) 0%, rgba(59, 130, 246, 0.2) 100%)",
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.2) 100%)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.img
                src={image.url}
                alt={image.alt}
                className="relative w-full h-80 object-cover transition-all duration-700 group-hover:scale-115 rounded-2xl border border-blue-400/20 shadow-2xl"
                animate={{
                  filter: [
                    "brightness(1) contrast(1) saturate(1)",
                    "brightness(1.1) contrast(1.1) saturate(1.2)",
                    "brightness(1) contrast(1) saturate(1)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ filter: "brightness(1.2) contrast(1.2) saturate(1.3)" }}
              />
              <motion.div
                className="absolute top-3 right-3 w-3 h-3 bg-blue-400 rounded-full shadow-lg"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
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