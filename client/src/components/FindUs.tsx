import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FindUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleCallToBook = () => {
    window.location.href = "tel:+16158774267";
  };

  const handleGetDirections = () => {
    window.open(
      "https://www.google.ca/maps/place/Royal+Cuts+Barbershop/@35.982598,-86.5187977,17z/data=!4m15!1m8!3m7!1s0x88640d275399b88f:0x4be656943dc06542!2sRoyal+Cuts+Barbershop!8m2!3d35.9826539!4d-86.5188836!10e5!16s%2Fg%2F11vzgwyyss!3m5!1s0x88640d275399b88f:0x4be656943dc06542!8m2!3d35.9826539!4d-86.5188836!16s%2Fg%2F11vzgwyyss?entry=ttu&g_ep=EgoyMDI1MDcyOC4wIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  };

  const hours = [
    { day: "Monday", time: "9:00 AM – 6:00 PM" },
    { day: "Tuesday", time: "9:00 AM – 6:00 PM" },
    { day: "Wednesday", time: "9:00 AM – 6:00 PM" },
    { day: "Thursday", time: "9:00 AM – 6:00 PM" },
    { day: "Friday", time: "2:00 PM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 6:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <section id="contact" className="py-20 bg-black text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Find Us
          </h2>
          <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto">
            Conveniently located in the heart of Smyrna, Tennessee
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start space-x-4"
              >
                <MapPin className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-playfair text-xl font-semibold mb-2">
                    Address
                  </h3>
                  <p className="text-gray-300 mb-2">
                    103 Jefferson St
                    <br />
                    Smyrna, TN 37167
                    <br />
                    United States
                  </p>
                  <button
                    onClick={handleGetDirections}
                    className="text-white hover:text-gray-300 underline flex items-center gap-1 transition-colors"
                  >
                    View on Google Maps
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start space-x-4"
              >
                <Phone className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-playfair text-xl font-semibold mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:+16158774267"
                    className="text-gray-300 hover:text-white text-lg transition-colors"
                  >
                    +1 (615) 877-4267
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-start space-x-4"
              >
                <Clock className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-playfair text-xl font-semibold mb-4">
                    Hours
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    {hours.map((hour, index) => (
                      <motion.div
                        key={hour.day}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        className="flex justify-between"
                      >
                        <span>{hour.day}</span>
                        <span
                          className={
                            hour.time === "Closed"
                              ? "text-red-400"
                              : "text-gray-300"
                          }
                        >
                          {hour.time}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.8969!2d-86.5187977!3d35.982598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88640d275399b88f%3A0x4be656943dc06542!2sRoyal%20Cuts%20Barbershop!5e0!3m2!1sen!2sus!4v1643723200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Royal Cuts Barbershop Location"
              />
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="font-playfair text-3xl font-bold mb-6">
            Ready for the Royal Treatment?
          </h3>
          <p className="font-inter text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your appointment and experience premium
            grooming at its finest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleCallToBook}
              className="btn-royal text-white px-8 py-4 rounded-full font-oswald font-medium text-lg hover:scale-105 transition-transform"
            >
              <Phone className="mr-2 h-5 w-5" />
              CALL TO BOOK
            </Button>
            <Button
              onClick={handleGetDirections}
              variant="outline"
              className="border-2 border-white text-white bg-transparent px-8 py-4 rounded-full font-oswald font-medium text-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              <MapPin className="mr-2 h-5 w-5" />
              GET DIRECTIONS
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
