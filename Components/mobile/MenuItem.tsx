import { motion } from "framer-motion";
import Link from "next/link";


type Props = {
  enabled: boolean;
  name: string;
  link: string;
};

const variants = {
  open: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function MenuItem({ enabled, link, name }: Props) {
  return (
    <motion.div variants={variants} className='flex  gap-[30px]'>
      {enabled?
      <Link href={`/${link}`}>
        <div className='navText1 text-4xl '>{name}</div>
      </Link>:<div className='navText1 text-4xl '>{name}</div>}
      
    </motion.div>
  );
}
