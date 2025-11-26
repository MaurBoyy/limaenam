import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

import gooday from "../../assets/Food&Drink/gooday.png";
import manies from "../../assets/Food&Drink/manies.png";
import nutri from "../../assets/Food&Drink/nutri.png";
import Mage1 from "../../assets/Food&Drink/Mage1.png";

const ServicesData = [
  {
    id: 1,
    image: gooday,
    title: "Good Day",
    subtitle:
      "Kopi instan dengan rasa manis pas. Cocok untuk menemani obrolan santai.",
    rating: 4.5,
  },
  {
    id: 2,
    image: manies,
    title: "Teh Manis",
    subtitle:
      "Teh segar dengan gula pas, minuman klasik yang selalu jadi favorit.",
    rating: 4.7,
  },
  {
    id: 3,
    image: nutri,
    title: "Nutrisari",
    subtitle:
      "Minuman jeruk segar kaya vitamin C. Pas untuk menyegarkan harimu.",
    rating: 4.3,
  },
  {
    id: 4,
    image: Mage1,
    title: "Magelang",
    subtitle:
      "Nasi goreng khas Magelang dengan campuran mie. Gurih dan mengenyangkan.",
    rating: 4.8,
  },
  {
    id: 5,
    image: Mage1,
    title: "Banglades",
    subtitle: "Mi kuah gurih pedas, cocok untuk pecinta rasa kuat dan nendang.",
    rating: 4.4,
  },
  {
    id: 6,
    image: Mage1,
    title: "Mie Nyemek",
    subtitle:
      "Mi khas nyemek dengan kuah kental. Perpaduan rasa gurih dan pedas.",
    rating: 4.6,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 150, damping: 12 },
  },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const Services = () => {
  return (
    <div className="container my-16 space-y-12 min-h-screen">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-5">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl md:text-4xl font-bold text-[#262729]"
        >
          Food & <span className="text-yellow-400">Drink</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.6,
          }}
          className="text-sm md:text-base opacity-70 leading-relaxed"
        >
          Nikmati pilihan menu makanan dan minuman yang pas untuk semua suasana.
        </motion.p>
      </div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {ServicesData.map((service) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 14 }}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 text-center space-y-5 border border-gray-100 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative w-full flex justify-center">
              <img
                src={service.image}
                alt={service.title}
                className="w-[140px] h-[140px] object-contain mx-auto rounded-xl transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Text */}
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-yellow-500 transition-colors">
                {service.title}
              </h2>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                {service.subtitle}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    i < Math.floor(service.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm text-gray-600 ml-2">
                {service.rating.toFixed(1)}
              </span>
            </div>

            {/* Divider */}
            <div className="w-12 mx-auto h-[3px] bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
