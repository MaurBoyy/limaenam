import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Lokasi = () => {
  const rating = 5; // ubah angka ini sesuai rating dari maps
  const maxStars = 5;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="container my-20 md:my-28">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 12,
          delay: 0.2,
        }}
        className="text-3xl md:text-4xl font-bold text-center text-[#262729] mb-10"
      >
        Maps <span className="text-yellow-400">Location</span>
      </motion.h1>

      {/* Card pembungkus maps */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 14,
          delay: 0.3,
        }}
        className="w-full bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        {/* Maps embed */}
        <div className="w-full h-[400px] md:h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2281701993016!2d106.8952158749917!3d-6.236230493748729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed4a64eb7031%3A0x4b8bb6c5b087d0a9!2sJl.%20Manunggal%20II%20No.56%2C%20RT.2%2FRW.1%2C%20Ceger%2C%20Cipayung%2C%20East%20Jakarta%2C%20Jakarta%2013820!5e0!3m2!1sen!2sid!4v1695632000000!5m2!1sen!2sid"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Warkop 56 Location"
          ></iframe>
        </div>

        {/* Rating */}
        <div className="p-4 flex items-center justify-center gap-2 bg-gray-50">
          <div className="flex">{renderStars()}</div>
          <span className="text-gray-700 text-sm">({rating} dari 5)</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Lokasi;
