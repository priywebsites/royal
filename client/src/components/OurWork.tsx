import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function OurWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const workImages = [
    {
      url: "/images/haircut1.png",
      alt: "Fresh fade haircut"
    },
    {
      url: "/images/haircut2.png", 
      alt: "Beard trim and styling"
    },
    {
      url: "/images/haircut3.png",
      alt: "Clean buzz cut"
    },
    {
      url: "/images/haircut4.png",
      alt: "Modern fade with beard"
    }
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
          <h2 className="font-space text-4xl md:text-5xl font-bold mb-6 text-black">
            Our Work
          </h2>
          <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto">
            See the artistry and craftsmanship in action
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {workImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl shadow-lg relative group cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-80 object-cover rounded-2xl"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-poppins font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
