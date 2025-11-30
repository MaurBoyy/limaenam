import React from "react";
import BgImage from "../../assets/bgreall.png";
import CoffeMain from "../../assets/only.png";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  const [sidebar, setSidebar] = React.useState(false);

  return (
    <main style={bgImage}>
      <section className="relative min-h-[750px] w-full">
        <div className="container">
          {/* Navbar */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />

          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* Left Text */}
            <div className="text-yellow-100 mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="text-7xl font-bold leading-tight ml-14"
              >
                <span className="text-[#FDE047]">Warkop</span> Lima Enam
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Since 2024</h1>
                  <p className="text-sm opacity-55 leading-loose">
                    Sejak berdiri pada tahun 2024, Warkop 56 hadir untuk
                    memberikan pengalaman ngopi yang nyaman dan hangat. Kami
                    berkomitmen menyajikan kopi terbaik serta suasana yang bikin
                    betah, baik untuk santai maupun kerja.
                  </p>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
              </motion.div>
            </div>

            {/* Middle Image */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                // src={CoffeMain}
                // alt="Coffee"
                // className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
              {/* Ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                // className="h-[180px] w-[180px] absolute top-24 -right-16 border-yellow-300 border-[20px] rounded-full z-10"
              />
              {/* Background Text */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="absolute -top-20 left-[200px] z-[1]"
              >
                <h1 className="text-[130px] scale-150 font-bold text-[#1A1F25]/40 leading-none">
                  Warkop Lima Enam
                </h1>
              </motion.div>
            </div>

            {/* Right Text */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.2,
              }}
              className="text-yellow-100 mt-[100px] md:mt-0 p-4 space-y-28"
            >
              <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                Warkop Lima Enam
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Historial 56</h1>
                  <p className="text-sm opacity-55 leading-loose">
                    Warkop 56 berawal dari tempat nongkrong kecil yang kemudian
                    berkembang menjadi ruang berkumpul favorit banyak orang.
                    Dengan konsep sederhana namun berkesan, kami terus
                    berinovasi untuk memberikan pelayanan dan cita rasa yang
                    konsisten.
                  </p>
                </div>
                <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-[#1B1F25]/50"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Sidebar */}
        {sidebar && (
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: "0" }}
            className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-[#FDE047]/80 to-[#FDE047]/80 backdrop-blur-sm z-10"
          >
            <div className="w-full h-full flex justify-center items-start pt-80">
              <div className="flex flex-col justify-center items-center gap-6 text-white">
                <div className="w-[1px] h-[70px] bg-white"></div>

                <a
                  href="https://www.whatsapp.com/catalog/6287861071848/?app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block p-2 rounded-full cursor-pointer border border-white hover:scale-110 hover:bg-white hover:text-[#25D366] transition"
                >
                  <FaWhatsapp className="text-2xl" />
                </a>

                <a
                  href="https://www.instagram.com/warkoplimaenam?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block p-2 rounded-full cursor-pointer border border-white hover:scale-110 hover:bg-white hover:text-pink-500 transition"
                >
                  <FaInstagram className="text-2xl" />
                </a>

                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block p-2 rounded-full cursor-pointer border border-white hover:scale-110 hover:bg-white hover:text-sky-400 transition"
                >
                  <FaTiktok className="text-2xl" />
                </a>

                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Hero;
