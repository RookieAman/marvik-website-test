import { motion } from "framer-motion";
import { useState } from "react";
import { Accordion } from "./Accordion";

const Services = (props) => {
  const [expanded, setExpanded] = useState();
  const accordionIds = props.lang == "es" ? accordionIdsEsp : accordionIdsEng;

  return (
    <div className="px-5 md:px-14 mb-[150px]">
      <motion.h1
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: [0.17, 0.55, 0.55, 1] }}
        viewport={{ once: true }}
        className="uppercase text-6xl md:text-[15vw] text-biotiflight"
      >
        {props.langInfo.title}
      </motion.h1>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: [0.17, 0.55, 0.55, 1] }}
        viewport={{ once: true }}
        className="line w-full border-b-2 border-black"
      ></motion.div>
      <div className="flex justify-end mt-8 mb-8 md:mb-60">
        {props.lang == "es" ? (
          <motion.span
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 1,
              ease: [0.17, 0.55, 0.55, 1],
            }}
            viewport={{ once: true }}
            className="line md:max-w-[750px] md:pb-0 text-lg lg:text-2xl"
          >
            Marvik es una combinación entre{" "}
            <span className="font-biotifbold">
              agencia creativa, empresa tecnológica y venture builder.
            </span>{" "}
            Sabemos lo que se necesita para crear marcas y productos desde cero
            y lanzarlos con éxito al mercado. Nos movemos a la velocidad de la
            cultura y la tecnología, y ayudamos a nuestros clientes a conseguir
            sus objetivos a través del data analysis, estrategias innovadoras y
            un diseño rompedor.
          </motion.span>
        ) : (
          <motion.span
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 1,
              ease: [0.17, 0.55, 0.55, 1],
            }}
            viewport={{ once: true }}
            className="line md:max-w-[750px] md:pb-0 text-lg lg:text-2xl"
          >
            Marvik is a combination of{" "}
            <span className="font-biotifbold">
              creative agency, technology company and venture builder.
            </span>{" "}
            We know what it takes to build brands and products from scratch and
            bring them successfully to market. We move at the speed of culture
            and technology, and help our clients achieve their goals through
            data analysis, innovative strategies and innovative design.
          </motion.span>
        )}
      </div>

      <div
        className="separator h-[100px] w-full"
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
        className="separator h-[100px] w-full"
        onMouseEnter={() => {
          setExpanded();
        }}
      ></div>
    </div>
  );
};

const accordionIdsEng = [
  {
    id: 0,
    title: "Product Design & Strategy",
    desc: {
      1: "_ UX / UI Design (web & app / products & services)",
      2: "_ UX Research",
      3: "_ User testing",
      4: "_ Continuous optimization",
      5: "_ Go-to-market strategy and growth strategies",
    },
    img: "/assets/Desgin.jpg",
  },
  {
    id: 1,
    title: "Branding & packaging",
    desc: {
      1: "_ Brand identity design",
      2: "_ Packaging",
      3: "_ Brand positioning strategy",
      4: "_ Brand Storytelling",
      5: "_ Brand Innovation",
      6: "_ Content creation strategy",
    },

    img: "/assets/Branding.jpg",
  },
  {
    id: 2,
    title: "Technology",
    desc: {
      1: "_ Web development",
      2: "_ iOS & Android app development",
      3: "_ E-commerce",
      4: "_ CRM",
      5: "_ CMS",
      6: "_ Big Data",
      7: "_ Solutions Architecture",
    },
    img: "/assets/Tech.jpg",
  },
  {
    id: 3,
    title: "Marketing & Research",
    desc: {
      1: "_ Performance marketing",
      2: "_ Inbound marketing",
      3: "_ Channel performance analytics",
      4: "_ Market intelligence",
      5: "_ Data Modelling & Analysis",
    },
    img: "/assets/Marketing.jpg",
  },
];

const accordionIdsEsp = [
  {
    id: 0,
    title: "Product Design & Strategy",
    desc: {
      1: "_ Diseño UX / UI (web & app)",
      2: "_ UX Research",
      3: "_ User testing",
      4: "_ Optimización contínua",
      5: "_ Estrategía de lanzamiento y crecimiento",
    },
    img: "/assets/Desgin.jpg",
  },
  {
    id: 1,
    title: "Branding & packaging",
    desc: {
      1: "_ Diseño de identidad de marca",
      2: "_ Packaging",
      3: "_ Estrategia y posicionamiento de marca",
      4: "_ Brand Storytelling",
      5: "_ Brand Innovation",
      6: "_ Estrategia y creación de contenidos",
    },

    img: "/assets/Branding.jpg",
  },
  {
    id: 2,
    title: "Tecnología",
    desc: {
      1: "_ Desarrollo web",
      2: "_ Desarrollo apps iOS & Android",
      3: "_ E-commerce",
      4: "_ CRM",
      5: "_ CMS",
      6: "_ Big Data",
      7: "_ Arquitectura de soluciones",
    },
    img: "/assets/Tech.jpg",
  },
  {
    id: 3,
    title: "Marketing & Research",
    desc: {
      1: "_ Performance marketing",
      2: "_ Inbound marketing",
      3: "_ Channel performance analytics",
      4: "_ Market intelligence",
      5: "_ Modelos y análisis de datos",
    },
    img: "/assets/Marketing.jpg",
  },
];

export default Services;
