import MarvikGlyph from "../public/svgs/marvikGlyph.svg";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Work() {
  const [realfoodingImg, setrealfoodingImg] = useState(
    "/assets/RealfoodingStatic.jpg"
  );
  const [hrImg, setHrImg] = useState("/assets/HRbg.mp4");
  const [shukranImg, setShukranImg] = useState("/assets/ShukranStatic.jpg");
  const [myrealfoodImg, setmyrealfoodImg] = useState(
    "/assets/MyrealfoodAPPStatic.jpg"
  );

  const [scrollY, setScrollY] = useState(0);
  const logoText =
    "The future starts here. The future starts here. The future starts here. The future starts here.";

  function setScroll() {
    setScrollY(window.scrollY);
  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", setScroll);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", setScroll);
    };
  });

  return (
    <>
      <div className="px-5 md:px-14 mt-[400px] xl:mt-[500px]">
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.17, 0.55, 0.55, 1] }}
          viewport={{ once: true }}
          className="uppercase text-6xl md:text-[15vw] text-biotiflight"
        >
          Proyectos
        </motion.h1>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.17, 0.55, 0.55, 1] }}
          viewport={{ once: true }}
          className="line w-full border-b-2 border-black"
        ></motion.div>
        <div className="flex justify-end mt-8 mb-20 md:mb-60">
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
            Nuestra pasión por la innovación y la búsqueda de la experiencia de
            usuario perfecta nos ha llevado a diseñar una aplicación de
            nutrición que ha batido récords. Y a transformar un movimiento de
            redes sociales en una de las marcas de alimentación con más impacto
            del momento. Y a construir una innovadora plataforma de colaboración
            B2B. ¿Listo para crear juntos?
          </motion.span>
        </div>
        <div className="w-full mb-[200px] sm:mb-[500px]">
          <div className="flex justify-center md:justify-start 2xl:pl-[15vw] -mb-6 md:-mb-12">
            <motion.h2
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.7,
                duration: 1,
                ease: [0.17, 0.55, 0.55, 1],
              }}
              viewport={{ once: true }}
              className="font-biotifbold text-6xl md:text-9xl z-10 customCursor"
              onMouseEnter={() => {
                setrealfoodingImg("/assets/RealfoodingAnim.gif");
              }}
              onClick={() => {
                setrealfoodingImg("/assets/RealfoodingAnim.gif");
              }}
              onMouseOut={() => {
                setrealfoodingImg("/assets/RealfoodingStatic.jpg");
              }}
            >
              Realfooding
            </motion.h2>
          </div>
          <div className="flex justify-center mb-16 sm:pl-[10vw] -z-10">
            <motion.div
              className="customCursor"
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                ease: [0.17, 0.55, 0.55, 1],
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
              whileHover={{ scale: 0.9 }}
              viewport={{ once: true }}
              onMouseEnter={() => {
                setrealfoodingImg("/assets/RealfoodingAnim.gif");
              }}
              onClick={() => {
                setrealfoodingImg("/assets/RealfoodingAnim.gif");
              }}
              onMouseOut={() => {
                setrealfoodingImg("/assets/RealfoodingStatic.jpg");
              }}
            >
              <Image
                src={realfoodingImg}
                alt="user profile picture"
                width={1800}
                height={1200}
              />
            </motion.div>
          </div>
          <div className="flex justify-between sm:ml-[20vw] max-w-[1700px] mb-16">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 1,
                ease: [0.17, 0.55, 0.55, 1],
              }}
              viewport={{ once: true }}
              className="line"
            >
              <h3 className="max-w-[400px] text-2xl font-biotifbold mb-6">
                Transformación de un movimiento de alimentación saludable en una
                de las marcas de F&B de mayor impacto.
              </h3>
              <ul className="list-none text-gray-400 text-xl">
                <li>branding</li>
                <li>packaging</li>
                <li>market research</li>
                <li>ux / ui design</li>
                <li>desarrollo tecnológico</li>
                <li>estrategia de contenido</li>
                <li>transformación estratégica</li>
              </ul>
            </motion.div>

            <div className="line text-right self-end text-xl sm:text-[3.5vw] sm:tracking-[.05vw] sm:leading-[3.2vw] text-gray-300 max-w-[950px]">
              cambiando la industria de la alimentación
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mb-[200px] sm:mb-[500px] bg-black/50 md:bg-black/10">
        <div className="w-full min-h-[750px] md:h-[1320px] customCursor">
          <video
            className="w-full h-[750px] md:h-full object-cover -z-20 absolute"
            src={hrImg}
            autoPlay
            loop
            muted
          ></video>
          <div className="flex h-full justify-between sm:ml-[5vw] py-16 sm:px-14 px-5 z-10">
            <div className="line md:mix-blend-difference">
              <motion.h2
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  ease: [0.17, 0.55, 0.55, 1],
                }}
                viewport={{ once: true }}
                className="font-biotifbold text-6xl md:text-9xl z-10 text-white sm:pt-[7%] mb-6 sm:mb-16 pt-12"
              >
                Hub &<br /> Rock
              </motion.h2>

              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.8,
                  duration: 1,
                  ease: [0.17, 0.55, 0.55, 1],
                }}
                viewport={{ once: true }}
                className="sm:ml-12"
              >
                <h3 className="text-white max-w-[450px] text-2xl font-biotifbold mb-6">
                  Product design y desarrollo tecnológico de una plataforma
                  innovadora de colaboración entre empresas basada en retos. Un
                  proyecto realizado para la Cámara de Comercio.
                </h3>
                <ul className="list-none text-gray-400 text-xl mb-16">
                  <li>desarrollo tecnológico</li>
                  <li>ux / ui design</li>
                  <li>branding</li>
                  <li>market research</li>
                  <li>estrategia go-to-market</li>
                </ul>

                {/* <div className="line">
                  <a
                    href="#"
                    className="text-xl sm:text-2xl pb-2 text-purple-600 border-b-2 border-purple-600 font-biotifbold"
                  >
                    <span>SEE CASE STUDY</span>
                  </a>
                </div> */}
              </motion.div>
            </div>

            <div className="line self-end text-2xl sm:text-[6.5vw] sm:tracking-[.05vw] sm:leading-[5.0vw] text-gray-300">
              innovación. <br />
              colaboración.
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mb-[200px] sm:mb-[500px]">
        <div className="flex justify-center lg:justify-around px-[10vw] -mb-6 md:-mb-12">
          <div></div>
          <motion.h2
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 1,
              ease: [0.17, 0.55, 0.55, 1],
            }}
            viewport={{ once: true }}
            className="font-biotifbold text-6xl md:text-9xl z-10 lg:ml-[400px] customCursor"
            onMouseEnter={() => {
              setShukranImg("/assets/ShukranAnim.gif");
            }}
            onClick={() => {
              setShukranImg("/assets/ShukranAnim.gif");
            }}
            onMouseOut={() => {
              setShukranImg("/assets/ShukranStatic.jpg");
            }}
          >
            Shukran
          </motion.h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-center px-5">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              ease: [0.17, 0.55, 0.55, 1],
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
            whileHover={{ scale: 0.9 }}
            viewport={{ once: true }}
            className="sm:max-w-[400px] xl:max-w-[800px] sm:self-center customCursor"
            onMouseEnter={() => {
              setShukranImg("/assets/ShukranAnim.gif");
            }}
            onClick={() => {
              setShukranImg("/assets/ShukranAnim.gif");
            }}
            onMouseOut={() => {
              setShukranImg("/assets/ShukranStatic.jpg");
            }}
          >
            <Image
              className="rounded-[30px]"
              src={shukranImg}
              alt="Shukran Project"
              width={800}
              height={1100}
            />
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 1,
              ease: [0.17, 0.55, 0.55, 1],
            }}
            viewport={{ once: true }}
            className="line sm:ml-[10vw]"
          >
            <h3 className="max-w-[380px] text-2xl font-biotifbold mb-6 mt-20">
              Rebranding, estrategia de contenidos y posicionamiento de la marca
              como uno de los líderes de la industria foodtech española.
            </h3>
            <ul className="list-none text-gray-400 text-xl mb-16">
              <li>branding</li>
              <li>packaging</li>
              <li>desarrollo tecnológico</li>
              <li>ux / ui design</li>
              <li>estrategia de contenido</li>
              <li>campañas de marketing digital</li>
            </ul>
          </motion.div>

          <div className="line text-right self-end text-3xl leading-6 sm:text-[5.5vw] sm:tracking-[.05vw] sm:leading-[4.5vw] text-gray-300 lg:absolute lg:right-10">
            foodtech for <br />
            the future
            <br />
          </div>
        </div>
      </div>

      <div className="w-full mb-[150px] sm:mb-[500px]">
        <div className="flex justify-center">
          <motion.h2
            initial={{ y: -200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 1,
              ease: [0.17, 0.55, 0.55, 1],
            }}
            viewport={{ once: true }}
            className="font-biotifbold text-6xl md:text-9xl z-10 mb-[100px] customCursor"
            onMouseEnter={() => {
              setmyrealfoodImg("/assets/MyrealfoodAPPAnim.gif");
            }}
            onClick={() => {
              setrealfoodingImg("/assets/MyrealfoodAPPAnim.gif");
            }}
            onMouseOut={() => {
              setmyrealfoodImg("/assets/MyrealfoodAPPStatic.jpg");
            }}
          >
            myrealfood
          </motion.h2>
        </div>
        <div className="flex w-full justify-center items-center flex-col md:flex-row">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 1,
              ease: [0.17, 0.55, 0.55, 1],
            }}
            viewport={{ once: true }}
            className="line text-7xl md:text-[6vw] leading-6 xl:text-[4.5vw] 2xl:text-[7vw] sm:tracking-[.05vw] xl:leading-[3.5vw] 2xl:leading-[5vw] text-gray-300"
          >
            app of
          </motion.div>
          <div className="flex items-end">
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                ease: [0.17, 0.55, 0.55, 1],
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
              whileHover={{ scale: 0.9 }}
              viewport={{ once: true }}
              className="mt-10 mb-6 md:my-0 max-w-[370px] sm:max-w-[400px] xl:max-w-[700px] 2xl:max-w-[800px] sm:self-center mx-5 sm:mx-[2vw] customCursor"
              onMouseEnter={() => {
                setmyrealfoodImg("/assets/MyrealfoodAPPAnim.gif");
              }}
              onClick={() => {
                setrealfoodingImg("/assets/MyrealfoodAPPAnim.gif");
              }}
              onMouseOut={() => {
                setmyrealfoodImg("/assets/MyrealfoodAPPStatic.jpg");
              }}
            >
              <Image
                className="rounded-[30px]"
                src={myrealfoodImg}
                alt="Shukran Project"
                width={800}
                height={1100}
              />
            </motion.div>
          </div>

          <div className="flex w-full justify-center items-center md:items-start flex-col md:flex-row md:block md:w-auto">
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 1,
                ease: [0.17, 0.55, 0.55, 1],
              }}
              viewport={{ once: true }}
              className="line text-7xl md:text-[6vw] leading-6 xl:text-[4.5vw] 2xl:text-[7vw] sm:tracking-[.05vw] xl:leading-[3.5vw] 2xl:leading-[5vw] text-gray-300"
            >
              the day
            </motion.div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.8,
                duration: 1,
                ease: [0.17, 0.55, 0.55, 1],
              }}
              viewport={{ once: true }}
              className="line px-5 md:absolute sm:ml-[34px] mt-[50px] md:mt-[100px] xl:mt-[200px]"
            >
              <h3 className="max-w-[570px] text-2xl font-biotifbold mb-6 mt-20">
                Diseño UX/UI de la app líder de escaneo de productos y de
                recetas saludables. Diseño y estrategia de lanzamiento del Plan
                Plus.
              </h3>
              <ul className="list-none text-gray-400 text-xl mb-16">
                <li>ux/ui design</li>
                <li>branding</li>
                <li>estrategia go-to-market</li>
              </ul>

              {/* <div className="line">
                <a
                  href="#"
                  className="text-xl sm:text-2xl pb-2 text-purple-600 border-b-2 border-purple-600 font-biotifbold"
                >
                  <span>SEE CASE STUDY</span>
                </a>
              </div> */}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center mb-[200px] sm:mb-[500px]">
        <div className="marvikCircle relative w-[160px] md:w-[360px] h-[160px] md:h-[360px] rounded-[100%] flex justify-center items-center mr-[30px] md:mr-[100px]">
          <MarvikGlyph className="w-[70px] md:w-[170px] absolute" />
          <div
            style={{ transform: `rotate(${scrollY}deg)` }}
            className="absolute w-full h-full"
          >
            <p>
              {logoText.split("").map((character, i) => (
                <span
                  key={"future" + i}
                  style={{ transform: `rotate(${i * 3.766}deg)` }}
                  className={`absolute left-[50%] tracking-normal text-sm md:text-2xl text-[#791BF5] origin-[0_80px] md:origin-[0_180px]`}
                >
                  {character}
                </span>
              ))}
            </p>
          </div>
        </div>
        <div>
          <a
            href="#marvikFooter"
            className="text-lg sm:text-4xl pb-2 text-purple-600 border-b-2 border-purple-600 font-biotifbold uppercase"
          >
            <span>Contáctanos</span>
          </a>
        </div>
      </div>
    </>
  );
}
