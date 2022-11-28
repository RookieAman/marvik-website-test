import { motion } from "framer-motion";
import AuchanLogo from "../public/svgs/Clients/auchanLogo.svg";
import CambraLogo from "../public/svgs/Clients/cambraLogo.svg";
import DanoneLogo from "../public/svgs/Clients/danoneLogo.svg";
import EuropastryLogo from "../public/svgs/Clients/europastryLogo.svg";
import HerLogo from "../public/svgs/Clients/herLogo.svg";
import InterregLogo from "../public/svgs/Clients/iterregLogo.svg";
import MeliLogo from "../public/svgs/Clients/meliLogo.svg";
import MigasaLogo from "../public/svgs/Clients/migasaLogo.svg";
import MunLogo from "../public/svgs/Clients/munLogo.svg";
import MyrealfoodLogo from "../public/svgs/Clients/myrealfoodLogo.svg";
import NeweLogo from "../public/svgs/Clients/neweLogo.svg";
import RealfoodingLogo from "../public/svgs/Clients/realfoodingLogo.svg";
import SandevidLogo from "../public/svgs/Clients/sandevidLogo.svg";
import ShukranLogo from "../public/svgs/Clients/shukranLogo.svg";
import TropsLogo from "../public/svgs/Clients/tropsLogo.svg";
import HochlandLogo from "../public/svgs/Clients/hochlandLogo.svg";
import MinimalistTrainingLogo from "../public/svgs/Clients/minimalistTrainingLogo.svg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Clients() {
  return (
    <>
      <div className="px-5 md:px-14">
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.17, 0.55, 0.55, 1] }}
          viewport={{ once: true }}
          className="uppercase text-6xl md:text-[15vw] text-biotiflight"
        >
          Clientes
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
            Trabajamos con todo tipo de clientes, desde grandes empresas hasta
            startups disruptivas, para construir{" "}
            <span className="font-biotifbold">
              marcas y productos digitales
            </span>{" "}
            de <span className="font-biotifbold">gran impacto.</span> Hemos
            ayudado a más de 50 empresas de distintos sectores a transformar sus
            negocios y a mejorar su presencia en un mundo digital cada vez más
            complejo.
          </motion.span>
        </div>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex max-w-[1900px] justify-center flex-wrap mx-auto mb-[300px]"
      >
        <motion.div className="clientLogo" variants={item}>
          <RealfoodingLogo className="clientSvg" />
        </motion.div>
        <motion.div className="clientLogo" variants={item}>
          <HochlandLogo className="clientSvg" />
        </motion.div>
        <motion.div className="clientLogo" variants={item}>
          <DanoneLogo className="clientSvg" />
        </motion.div>
        <motion.div className="clientLogo" variants={item}>
          <AuchanLogo className="clientSvg" />
        </motion.div>

        <motion.div className="clientLogo" variants={item}>
          <MigasaLogo className="clientSvg" />
        </motion.div>
        <motion.div className="clientLogo" variants={item}>
          <ShukranLogo className="clientSvg" />
        </motion.div>
        <motion.div className="clientLogo" variants={item}>
          <MyrealfoodLogo className="clientSvg" />
        </motion.div>
        <motion.div className="clientLogo" variants={item}>
          <EuropastryLogo className="clientSvg" />
        </motion.div>

        <motion.div className="clientLogo" variants={item}>
          <CambraLogo className="clientSvg" />
        </motion.div>
        <motion.div className="clientLogo" variants={item}>
          <InterregLogo className="clientSvg" />
        </motion.div>
        <motion.div className="clientLogo" variants={item}>
          <TropsLogo className="clientSvg" />
        </motion.div>
        <motion.div className="clientLogo" variants={item}>
          <HerLogo className="clientSvg" />
        </motion.div>

        <motion.div className="clientLogo" variants={item}>
          <NeweLogo className="clientSvg" />
        </motion.div>
        <motion.div className="clientLogo" variants={item}>
          <MunLogo className="clientSvg" />
        </motion.div>
        <motion.div className="clientLogo" variants={item}>
          <MeliLogo className="clientSvg" />
        </motion.div>
        <motion.div className="clientLogo" variants={item}>
          <MinimalistTrainingLogo className="clientSvg" />
        </motion.div>
      </motion.div>
    </>
  );
}
