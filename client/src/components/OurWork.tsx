import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function OurWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const workImages = [
    {
      url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600",
      alt: "Fresh fade haircut",
    },
    {
      url: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600",
      alt: "Precision beard trim",
    },
    {
      url: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600",
      alt: "Modern haircut styling",
    },
    {
      url: "https://images.unsplash.com/photo-1621607512214-68297480165e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600",
      alt: "Classic gentleman's cut",
    },
    {
      url: "https://images.unsplash.com/photo-1633681926035-ec1ac984418a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600",
      alt: "Professional business cut",
    },
    {
      url: "https://images.unsplash.com/photo-1581618047805-8bb1ca98b5e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600",
      alt: "Trendy modern fade",
    },
    {
      url: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600",
      alt: "Styled pompadour",
    },
    {
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600",
      alt: "Clean shave finish",
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
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-black">
            Our Work
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            See the artistry and craftsmanship in action
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
