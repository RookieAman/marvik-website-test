import React from "react";
import { motion } from "framer-motion";

const banner = () => {
  const bannerVar = {
    animate: (i) => ({
      transition: {
        delayChildren: i,
        staggerChildren: 0.02, //0.1
      },
    }),
  };

  const letterAni = {
    initial: { y: 200 },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  };

  const AnimatedLetters = ({ title, customDelay, maxW }) => (
    <motion.span
      className={`row-title inline-block overflow-hidden ${
        maxW ? "max-w-[" + maxW + "px]" : ""
      }`}
      variants={bannerVar}
      initial="initial"
      animate="animate"
      custom={customDelay}
    >
      {[...title].map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block row-letter"
          variants={letterAni}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );

  return (
    <motion.section
      initial={{ backgroundColor: "#000" }}
      animate={{ backgroundColor: "#FFF" }}
      className="main w-full h-[100vh]"
    >
      <div className="px-5 md:pt-[16vw] flex justify-center pb-[7vw] pt-[40vw]">
        <motion.h1
          initial={{ color: "#FFF" }}
          animate={{ color: "#000" }}
          className="relative md:text-[4.5vw] md:tracking-[.10vw] md:leading-[4.2vw] text-3xl tracking-tight font-biotiflight max-w-[430px] md:max-w-none"
        >
          <div className="line">
            <span className="row-title inline-block overflow-hidden">
              {["Empresa, futuro."].map((letter, i) => (
                <span key={i} className="inline-block row-letter">
                  {letter}
                </span>
              ))}
            </span>
          </div>
          <div className="line">
            <span className="row-title inline-block overflow-hidden">
              {["Futuro, empresa."].map((letter, i) => (
                <span key={i} className="inline-block row-letter">
                  {letter}
                </span>
              ))}
            </span>
          </div>
          <div className="line font-biotifbold text-[29px] md:text-[4.5vw] hidden sm:block">
            <AnimatedLetters
              customDelay={0.2}
              title={`Una \u00A0 conexión \u00A0 hecha \u00A0 en \u00A0 Marvik.`}
            />
          </div>
          <div className="line font-biotifbold text-[29px] md:text-[4.5vw] block sm:hidden">
            <AnimatedLetters
              maxW={300}
              customDelay={0.2}
              title={`Una \u00A0 conexión \u00A0 hecha \u00A0 en \u00A0 Marvik.`}
            />
          </div>
        </motion.h1>
      </div>

      <div className="px-5 xl:px-0 justify-center flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-auto flex justify-center md:justify-start mr-[7vw]">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.1,
              ease: "easeInOut",
              duration: 0.5,
            }}
            className="h-[350px] w-[250px] 2xl:h-[600px] 2xl:w-[400px] bg-black rounded-[220px]"
          ></motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.7,
            ease: "easeInOut",
            duration: 0.5,
          }}
          className="line md:max-w-[750px] pb-24 md:pb-0 text-lg lg:text-2xl"
        >
          <span>
            We build brands and elevate companies to the status of game
            changers. We don’t settle until we create a better tomorrow for your
            company, your clients, and our society, sometimes breaking a few
            boundaries along the way.
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default banner;
