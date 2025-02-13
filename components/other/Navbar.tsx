"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

interface NavProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const DarkRedNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="bg-gradient-to-br from-black to-gray-900 relative">
      <motion.button
        whileHover={{ rotate: "180deg" }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed top-6 left-6 text-3xl bg-red-600 text-white hover:bg-red-700 transition-colors p-4 rounded-full z-50"
      >
        <FiMenu />
      </motion.button>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const Nav: React.FC<NavProps> = ({ isOpen, setIsOpen }) => {
  return (
    <motion.nav
      className="fixed top-0 bottom-0 w-screen bg-black text-white z-[9999]"
      animate={isOpen ? "open" : "closed"}
      variants={navVariants}
      initial="closed"
    >
      <motion.button
        className="text-3xl bg-red-600 text-white hover:bg-red-700 transition-colors p-4 rounded-full absolute top-6 left-6"
        whileHover={{ rotate: "180deg" }}
        onClick={() => setIsOpen(false)}
        whileTap={{ scale: 0.9 }}
      >
        <FiX />
      </motion.button>
      <motion.div
        variants={linkWrapperVariants}
        className="flex flex-col gap-6 absolute bottom-12 left-12"
      >
        <NavLink text="Home" />
        <NavLink text="About" />
        <NavLink text="Services" />
        <NavLink text="Contact" />
      </motion.div>
    </motion.nav>
  );
};

interface NavLinkProps {
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ text }) => {
  return (
    <motion.a
      className="inline-block text-white font-black text-5xl hover:text-red-500 transition-colors"
      variants={navLinkVariants}
      transition={{ type: "spring", damping: 3 }}
      whileHover={{ y: -10, rotate: "-5deg" }}
      href="#"
    >
      {text}
    </motion.a>
  );
};

export default DarkRedNav;

const navVariants = {
  open: {
    x: "0%",
    opacity: 1,
  },
  closed: {
    x: "100%",
    opacity: 0,
  },
};

const linkWrapperVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const navLinkVariants = {
  open: { x: 0 },
  closed: { x: 25 },
};
