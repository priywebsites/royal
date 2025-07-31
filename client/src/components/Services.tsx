import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, User, Droplets, Crown, Baby, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleBookNow = () => {
    window.location.href = "tel:+16158774267";
  };

  const services = [
    {
      icon: Scissors,
      title: "Premium Haircut",
      price: "$40",
      duration: "30 Minutes",
      description:
        "Tailored to your unique style and head shape. Includes expert finishing and styling.",
    },
    {
      icon: User,
      title: "Beard Trim & Shape",
      price: "$25",
      duration: "20 Minutes",
      description:
        "Sharp, detailed shaping and grooming for a clean, defined look. Razor finish included.",
    },
    {
      icon: Droplets,
      title: "Hot Towel Shave",
      price: "$35",
      duration: "25 Minutes",
      description:
        "Classic straight razor shave with hot towels and steam therapy for the ultimate experience.",
    },
    {
      icon: Crown,
      title: "The Royal Package",
      price: "$85",
      duration: "60 Minutes",
      description:
        "Complete grooming experience: haircut, beard trim, hot towel shave, and facial treatment.",
    },
    {
      icon: Baby,
      title: "Kids Haircut",
      price: "$30",
      duration: "20 Minutes",
      description:
        "Fun, fast, and friendly cuts for kids 12 and under. We make sure every child leaves smiling.",
    },
    {
      icon: Palette,
      title: "Hair Styling",
      price: "$20",
      duration: "15 Minutes",
      description:
        "Professional styling with premium products for special occasions and everyday looks.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-black text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h2>
          <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto">
            Premium grooming services designed to elevate your style and
            confidence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="service-card bg-gray-900 p-8 rounded-lg"
              >
                <div className="text-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <IconComponent className="w-12 h-12 text-white mb-4 mx-auto" />
                  </motion.div>
                  <h3 className="font-playfair text-2xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <div className="text-3xl font-bold text-white mb-2">
                    {service.price}
                  </div>
                  <div className="text-gray-400">{service.duration}</div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button
                  onClick={handleBookNow}
                  className="w-full btn-royal text-white py-3 rounded-full font-oswald font-medium hover:scale-105 transition-transform"
                >
                  BOOK NOW
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
