import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function OurWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Fresh Fade Haircuts",
      description: "Precision cuts with modern styling techniques"
    },
    {
      title: "Beard Trimming & Styling",
      description: "Expert beard shaping and maintenance"
    },
    {
      title: "Classic Gentleman's Cuts",
      description: "Timeless styles with contemporary flair"
    },
    {
      title: "Hair Styling & Finishing",
      description: "Complete styling with premium products"
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
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <h3 className="font-space text-xl font-bold mb-3 text-black">
                {service.title}
              </h3>
              <p className="font-poppins text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
