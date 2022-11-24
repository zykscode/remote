
import { motion, Variants } from 'framer-motion';
import navs from '../../Libs/data/navs';
import Button from '../Button';
import MenuItem from './MenuItem';



const variants: Variants = {
  open: {
    y: 'calc(0%)',
    transition: {
      x: { duration: 0.5 },
      type: 'ease',
      staggerChildren: 0.25,
      delayChildren: 0.75,
    },
  },
  closed: {
    y: 'calc(-200%)',
    transition: {
      x: { duration: 0.5 },
      type: 'ease',
      staggerChildren: 0.25,
      staggerDirection: -1,
      delay: 1.5,
    },
  },
};
type Props = {};

export const Navigation = (props: Props) => {
  return (
    <motion.div
      variants={variants}
      className="mobileNav  absolute overflow-clip "
    >
      <div className="smallNav">
        {navs.map((icon, i) => (
          <MenuItem
            key={i}
            link={icon.link}
            enabled={icon.enabled}
            name={icon.name}
          />
        ))}

        <Button text='Get Started'/>
      </div>
    </motion.div>
  );
};
