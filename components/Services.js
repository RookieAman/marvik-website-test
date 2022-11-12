import { motion } from "framer-motion";
import { useState } from "react";
import { Accordion } from "./Accordion";

export default function Services() {
  const [expanded, setExpanded] = useState();

  return (
    <div className="px-5 md:px-14 mb-[300px]">
      <motion.h1
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: [0.17, 0.55, 0.55, 1] }}
        viewport={{ once: true }}
        className="uppercase text-6xl md:text-[15vw] text-biotiflight"
      >
        Services
      </motion.h1>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: [0.17, 0.55, 0.55, 1] }}
        viewport={{ once: true }}
        className="line w-full border-b-2 border-black"
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

      <div
        className="separator h-[100px] w-full bg-slate-800"
        onMouseEnter={() => {
          setExpanded();
        }}
      ></div>
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
      <div
        className="separator h-[100px] w-full bg-slate-800"
        onMouseEnter={() => {
          setExpanded();
        }}
      ></div>
    </div>
  );
}

const accordionIds = [
  {
    id: 0,
    title: "Business",
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
