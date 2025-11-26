import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 px-4 sm:px-8 py-4 sm:py-6 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo section */}
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-xl sm:text-2xl font-semibold uppercase"
          >
            <div className="text-white">Warkop 56</div>
          </motion.h1>

          {/* hamburger section */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            onClick={() => setSidebar(!sidebar)}
            className="cursor-pointer"
          >
            <GiHamburgerMenu className="text-2xl sm:text-3xl" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
