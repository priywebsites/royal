import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

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

  const [brokenImages, setBrokenImages] = useState<number[]>([]);

  const handleImageError = (index: number) => {
    setBrokenImages((prev) => [...prev, index]);
  };

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
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg relative group cursor-pointer"
            >
              {brokenImages.includes(index) ? (
                <div className="w-full h-80 flex items-center justify-center bg-gray-200 text-gray-500 text-center rounded-2xl">
                  Image failed to load
                </div>
              ) : (
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-80 object-cover rounded-2xl"
                  loading="lazy"
                  onError={() => handleImageError(index)}
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-poppins font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
