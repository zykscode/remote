'use client'
import { motion, Variants } from "framer-motion";
import React, { useState } from "react";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar: Variants = {
  open: {
    // clipPath: `rect(0% 5% 100% 100%)`,
    transition: {
      type: "ease",
      duration: 2,
    },
  },
  closed: {
    // clipPath: 'rect(0% 0% 0% 0%)',
    transition: {
      type: "ease",
      duration: 2,
    },
  },
};
type Props = {};

const Toggle = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [navShow, setNavShow] = useState(false);
  const handleOpen = () => {
    setIsOpen(() => !isOpen);
  };
  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
      }

      return !status;
    });
  };

  return (
    <div>
      <motion.nav
        animate={isOpen ? "open" : "closed"}
        className='z-10 mobileToggleDiv'
        initial={false}>
        <motion.div className={` z-10  `} variants={sidebar}>
          <Navigation />
        </motion.div>

        <MenuToggle
          toggle={() => {
            handleOpen();
            onToggleNav();
          }}
        />
      </motion.nav>
    </div>
  );
};

export default Toggle;
