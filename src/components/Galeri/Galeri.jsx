import React, { useState } from "react";
import { motion } from "framer-motion";

// Import foto-foto
import img1 from "../../assets/Galer/1gb.jpeg";
import img2 from "../../assets/Galer/2gb.jpeg";
import img3 from "../../assets/Galer/3gb.jpeg";
import img4 from "../../assets/Galer/4gb.jpeg";
import img5 from "../../assets/Galer/img-9.jpg";
import img6 from "../../assets/Galer/6gb.jpeg";
import img7 from "../../assets/Galer/7gb.jpg";
import img8 from "../../assets/Galer/img-10.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Galeri = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="container my-20 md:my-28">
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
        Galeri <span className="text-yellow-400">Warkop 56</span>
      </motion.h1>

      {/* Grid galeri */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            className="cursor-pointer overflow-hidden rounded-2xl shadow-lg group bg-gray-100"
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            <div className="aspect-square w-full">
              <img
                src={src}
                alt={`galeri-${index}`}
                className={`w-full h-full object-cover object-center transition-all duration-500 ease-in-out 
                  ${
                    activeIndex === index
                      ? "grayscale-0 scale-105"
                      : "grayscale group-hover:grayscale-0"
                  }`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Galeri;
