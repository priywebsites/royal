import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reviews = [
    {
      name: "Michael Rodriguez",
      initials: "MR",
      platform: "Google Review",
      rating: 5,
      review:
        "Amazing work! The barbers here are true artists. Clean cuts, great atmosphere, and excellent customer service. Will definitely be coming back!",
    },
    {
      name: "David Chen",
      initials: "DC",
      platform: "Google Review",
      rating: 5,
      review:
        "Best barbershop in Smyrna! They really know how to do a perfect fade. Professional service and reasonable prices. Highly recommended!",
    },
    {
      name: "Carlos Martinez",
      initials: "CM",
      platform: "Google Review",
      rating: 5,
      review:
        "Top-notch service every time. The attention to detail is incredible. My beard and haircut always look fresh when I leave here.",
    },
    {
      name: "James Thompson",
      initials: "JT",
      platform: "Google Review",
      rating: 5,
      review:
        "These guys are the real deal. Clean shop, skilled barbers, and they really listen to what you want. Royal Cuts is the place to go!",
    },
    {
      name: "Anthony Garcia",
      initials: "AG",
      platform: "Google Review",
      rating: 5,
      review:
        "Excellent experience! Professional barbers who take their time to make sure everything is perfect. The shop has a great vibe too.",
    },
    {
      name: "Robert Kim",
      initials: "RK",
      platform: "Google Review",
      rating: 5,
      review:
        "Consistently great cuts and service. The barbers are friendly and skilled. This is my go-to spot for haircuts and beard trims.",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          delay: i * 0.1, 
          type: "spring", 
          stiffness: 200,
          damping: 10 
        }}
        whileHover={{ 
          scale: 1.3, 
          rotate: [0, -10, 10, 0] 
        }}
      >
        <Star
          className={`w-5 h-5 ${
            i < rating ? "text-blue-500 fill-current" : "text-gray-300"
          }`}
          style={{
            filter: i < rating ? "drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))" : "none"
          }}
        />
      </motion.div>
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gray-100" ref={ref}>
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
            What Our Clients Say
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
            Real reviews from satisfied customers
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 50, scale: 0.8, rotateY: 45 }}
              animate={
                isInView ? { opacity: 1, y: 0, scale: 1, rotateY: 0 } : { opacity: 0, y: 50, scale: 0.8, rotateY: 45 }
              }
              transition={{ 
                duration: 1, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.03,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(0, 123, 255, 0.2)"
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-100/50 relative group"
            >
              <div className="flex items-center mb-4">
                <div className="flex">{renderStars(review.rating)}</div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{review.review}"
              </p>
              <div className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold mr-4"
                >
                  {review.initials}
                </motion.div>
                <div>
                  <p className="font-semibold text-black">{review.name}</p>
                  <p className="text-gray-500 text-sm">{review.platform}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
