import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";

function getRelativeCoordinates(event, referenceElement) {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight,
  };

  let reference = referenceElement.offsetParent;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
    width: offset.width,
    height: offset.height,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY:
      (position.y - offset.top - offset.height / 2) / (offset.height / 2),
  };
}

export default function Services() {
  const [expanded, setExpanded] = useState();

  return (
    <div className="px-5 md:px-14 mb-[700px]">
      <motion.h1
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: [0.17, 0.55, 0.55, 1] }}
        viewport={{ once: true }}
        className="uppercase text-8xl md:text-[15vw] text-biotiflight"
      >
        Services
      </motion.h1>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: [0.17, 0.55, 0.55, 1] }}
        viewport={{ once: true }}
        className="line w-full border-b-2 border-black hidden md:block"
      ></motion.div>
      <div className="flex justify-end mt-8 mb-36 md:mb-60">
        <motion.span
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 1,
            ease: [0.17, 0.55, 0.55, 1],
          }}
          viewport={{ once: true }}
          className="line md:max-w-[750px] pb-[10vw] md:pb-0 text-lg lg:text-2xl"
        >
          We build brands and elevate companies to the status of game changers.
          We don’t settle until we create a better tomorrow for your company,
          your clients, and our society, sometimes breaking a few boundaries
          along the way.
        </motion.span>
      </div>

      <div>
        {accordionIds.map(({ id, title, desc, img }) => (
          <Accordion
            key={id}
            id={id}
            expanded={expanded}
            setExpanded={setExpanded}
            title={title}
            desc={desc}
            hoverImg={img}
          />
        ))}
      </div>
    </div>
  );
}

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
    console.log(mousePosition);
  };

  return (
    <motion.div
      ref={boxRef}
      className="px-5 lg:px-[10vw] lg:pb-[200px] cursor-pointer pt-6 relative"
      initial={false}
      animate={{ fontWeight: isOpen ? 700 : 0 }}
      onMouseEnter={() => setExpanded(isOpen ? false : id)}
      onMouseMove={(e) => handleMouseMove(e)}
    >
      <motion.h2
        animate={{ color: isOpen ? "#791BF5" : "#000" }}
        className="font-biotiflight text-4xl lg:text-7xl 2xl:text-9xl max-w-[700px] mb-12 flex"
      >
        {title}
        {mousePosition.x && (
          <motion.div
            className="absolute hidden md:block md:w-[400px] md:h-[600px] 2xl:w-[800px] 2xl:h-[1000px]"
            src={hoverImg}
            initial={{ opacity: 0 }}
            animate={{
              opacity: isOpen && mousePosition.x ? 1 : 0,
              x: mousePosition.x,
              y: mousePosition.y - 500,
            }}
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
            className="w-full hidden md:block"
          >
            <span className="example font-light hidden md:block text-xl">
              {desc}
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.2 }}
              className="md:mt-6 xl:mt-24 line w-full border-b-2 border-black hidden md:block"
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const accordionIds = [
  {
    id: 0,
    title: "Business transformation",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    img: "https://dummyimage.com/800x1000/bf9bbf/ffffff",
  },
  {
    id: 1,
    title: "Branding",
    desc: "Vivamus fermentum semper et natoque curae facilisis",
    img: "https://dummyimage.com/800x1000/bf9bbf/ffffff",
  },
  {
    id: 2,
    title: "Design",
    desc: "Nisi accumsan tempus mauris platea metus duis facilisis",
    img: "https://dummyimage.com/800x1000/bf9bbf/ffffff",
  },
  {
    id: 3,
    title: "Design",
    desc: "Nisi accumsan tempus mauris platea metus duis facilisis",
    img: "https://dummyimage.com/800x1000/bf9bbf/ffffff",
  },
];
