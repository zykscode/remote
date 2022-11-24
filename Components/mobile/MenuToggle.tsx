import * as React from "react";
import { motion, SVGMotionProps } from "framer-motion";

const Path =(props: JSX.IntrinsicAttributes & SVGMotionProps<SVGPathElement> & React.RefAttributes<SVGPathElement>) => (
  <motion.path
    fill="currentColor"
    strokeWidth="3"
    stroke="#292D32"
    strokeLinecap="round"
    {...props}

  />
);

export const MenuToggle = (props: { toggle: React.MouseEventHandler<HTMLButtonElement> | undefined; }) => (
  <button type="button" className=" z-[1000] relative mobileToggle" title="menu toogle" onClick={props.toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <defs>
      <linearGradient id="linearGrad">

      </linearGradient>
      </defs>
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);
