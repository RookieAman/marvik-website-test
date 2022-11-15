import { motion } from "framer-motion";
import { useState } from "react";
import { Accordion } from "./Accordion";

export default function Services() {
  const [expanded, setExpanded] = useState();

  return (
    <div className="px-5 md:px-14 mb-[150px]">
      <motion.h1
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: [0.17, 0.55, 0.55, 1] }}
        viewport={{ once: true }}
        className="uppercase text-6xl md:text-[15vw] text-biotiflight"
      >
        Servicios
      </motion.h1>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: [0.17, 0.55, 0.55, 1] }}
        viewport={{ once: true }}
        className="line w-full border-b-2 border-black"
      ></motion.div>
      <div className="flex justify-end mt-8 mb-8 md:mb-60">
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
          Marvik es una combinación entre agencia creativa, empresa tecnológica
          y venture builder. Sabemos lo que se necesita para crear marcas y
          productos desde cero y lanzarlos con éxito al mercado. Nos movemos a
          la velocidad de la cultura y la tecnología, y ayudamos a nuestros
          clientes a conseguir sus objetivos a través del data analysis,
          estrategias innovadoras y un diseño rompedor.
        </motion.span>
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
}

const accordionIds = [
  {
    id: 0,
    title: "Product Design & Strategy",
    desc: {
      1: "- Diseño UX / UI (web & app)",
      2: "- UX Research",
      3: "- User testing",
      4: "- Optimización contínua",
      5: "- Estrategía de lanzamiento y crecimiento",
    },
    img: "/assets/Desgin.jpg",
  },
  {
    id: 1,
    title: "Branding & packaging",
    desc: {
      1: "- Diseño de identidad de marca",
      2: "- Packaging",
      3: "- Estrategia y posicionamiento de marca",
      4: "- Brand Storytelling",
      5: "- Brand Innovation",
      6: "- Estrategia y creación de contenidos",
    },

    img: "/assets/Branding.jpg",
  },
  {
    id: 2,
    title: "Tecnología",
    desc: {
      1: "- Desarrollo web",
      2: "- Desarrollo apps iOS & Android",
      3: "- E-commerce",
      4: "- CRM",
      5: "- CMS",
      6: "- Big Data",
      7: "- Arquitectura de soluciones",
    },
    img: "/assets/Tech.jpg",
  },
  {
    id: 3,
    title: "Marketing & Research",
    desc: {
      1: "- Performance marketing",
      2: "- Inbound marketing",
      3: "- Channel performance analytics",
      4: "- Market intelligence",
      5: "- Modelos y análisis de datos",
    },
    img: "/assets/Marketing.jpg",
  },
  // {
  //   id: 4,
  //   title: "Transformación digital",
  //   desc: {
  //     1: "- Estrategia digital",
  //     2: "- Implementación metodologías Agile",
  //     3: "- Modelos de negocio digitales",
  //     4: "- Transformación de la experiencia de usuario",
  //     5: "- Digitalización de las operaciones",
  //   },
  //   img: "/assets/Tech.jpg",
  // },
];
