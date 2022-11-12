import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import getRelativeCoordinates from "../hooks/getRelativeCoordinates";
import Image from "next/image";

export const Accordion = ({
  id,
  expanded,
  setExpanded,
  title,
  desc,
  hoverImg,
}) => {
  const isOpen = id === expanded;

  const [mousePosition, setMousePosition] = useState({});
  const boxRef = useRef();
  const handleMouseMove = (e) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };

  return (
    <motion.div
      ref={boxRef}
      className="px-5 lg:px-[10vw] lg:pb-[200px] cursor-pointer pt-6 relative"
      initial={false}
      animate={{ fontWeight: isOpen ? 700 : 0 }}
      onMouseEnter={() => setExpanded(isOpen ? false : id)}
      onMouseMove={(e) => handleMouseMove(e)}
      onClick={() => setExpanded(id)}
    >
      <motion.h2
        animate={{ color: isOpen ? "#791BF5" : "#000" }}
        className="font-biotiflight text-4xl lg:text-7xl 2xl:text-9xl max-w-[700px] mb-12 flex"
      >
        {title}
        {mousePosition.x && (
          <motion.div
            className="absolute hidden md:block md:w-[400px] md:h-[600px] 2xl:w-[800px] 2xl:h-[1000px] pointer-events-none"
            src={hoverImg}
            initial={{ opacity: 0 }}
            animate={{
              opacity: isOpen && mousePosition.x ? 1 : 0,
              x: mousePosition.x,
              y: mousePosition.y - 500,
            }}
            onMouseEnter={() => (!expanded ? setExpanded() : setExpanded(id))}
          >
            <Image
              className="pointer-events-none"
              src={hoverImg}
              alt=""
              width={800}
              height={1000}
            />
          </motion.div>
        )}
      </motion.h2>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            className="w-full"
          >
            <span className="example font-light text-xl">{desc}</span>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.2 }}
              className="mt-6 xl:mt-24 line w-full border-b-2 border-black"
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
