import React from 'react'
import { motion } from 'framer-motion'

const banner = (locale) => {
  const currentLang = locale.lang

  const bannerVar = {
    animate: (i) => ({
      transition: {
        delayChildren: i,
        staggerChildren: 0.02, //0.1
      },
    }),
  }

  const letterAni = {
    initial: { y: 200 },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  }

  const AnimatedLetters = ({ title, customDelay, maxW }) => (
    <motion.span
      className={`row-title inline-block overflow-hidden ${
        maxW ? 'max-w-[' + maxW + 'px]' : ''
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
  )

  return (
    <motion.section
      initial={{ backgroundColor: '#000' }}
      animate={{ backgroundColor: '#FFF' }}
      className="main w-full mb-[200px] 2xl:mb-[500px]"
    >
      <div className="px-5 md:pt-[16vw] flex justify-center pb-[7vw] pt-[40vw]">
        <motion.h1
          initial={{ color: '#FFF' }}
          animate={{ color: '#000' }}
          className="relative md:text-[4.5vw] md:tracking-[.10vw] md:leading-[4.2vw] text-3xl tracking-tight font-biotiflight max-w-[430px] md:max-w-none"
        >
          <div className="line max-h-[110px]">
            <span className="row-title inline-block overflow-hidden">
              {[
                currentLang == 'es'
                  ? 'Empresa, futuro.'
                  : 'Brand, meet future.',
              ].map((letter, i) => (
                <span key={i} className="inline-block row-letter">
                  {letter}
                </span>
              ))}
            </span>
          </div>
          <div className="line max-h-[110px]">
            <span className="row-title inline-block overflow-hidden">
              {[
                currentLang == 'es'
                  ? 'Futuro, empresa.'
                  : 'Future, meet brand.',
              ].map((letter, i) => (
                <span key={i} className="inline-block row-letter">
                  {letter}
                </span>
              ))}
            </span>
          </div>
          <div className="line font-biotifbold text-[28px] md:text-[4.5vw] break-normal inline-block">
            <AnimatedLetters
              customDelay={0.2}
              title={
                currentLang == 'es'
                  ? `Una \u00A0 conexión \u00A0 hecha \u00A0 en \u00A0 Marvik`
                  : `A \u00A0 match \u00A0 made \u00A0 in \u00A0 Marvik`
              }
            />
          </div>
          {/* <div className="line font-biotifbold text-[29px] md:text-[4.5vw] block sm:hidden">
            <AnimatedLetters
              maxW={300}
              customDelay={0.2}
              title={`Una \u00A0 conexión \u00A0 hecha \u00A0 en \u00A0 Marvik.`}
            />
          </div> */}
        </motion.h1>
      </div>

      <div className="px-5 xl:px-0 justify-center flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-auto flex justify-center md:justify-start mr-[7vw]">
          <a
            href="https://drive.google.com/file/d/1cbNa7GaE-dDAZoH-Y-y-flhBl5McXwDM/view?usp=sharing"
            target={'_blank'}
            rel="noopener noreferrer"
          >
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.1,
                ease: 'easeInOut',
                duration: 0.5,
              }}
              className="flex justify-center items-center h-[350px] w-[250px] 2xl:h-[600px] 2xl:w-[400px] bg-black rounded-[220px] bg-[url('/assets/PresentationThumbnail.jpg')] bg-cover bg-center pointer"
            >
              <span className="text-3xl text-white animate-flicker">
                {currentLang == 'es' ? 'Saber más' : 'About us'}
              </span>
            </motion.div>
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.7,
            ease: 'easeInOut',
            duration: 0.5,
          }}
          className="line md:max-w-[750px] pb-24 md:pb-0 text-lg lg:text-2xl"
        >
          {currentLang == 'es' ? (
            <span>
              Marvik es una consultora de{' '}
              <span className="font-biotifbold">
                diseño, marketing y tecnología.
              </span>{' '}
              Construimos marcas y convertimos a nuestros clientes en{' '}
              <span className="font-biotifbold"> disruptores. </span> No nos
              conformamos hasta que no creamos un futuro mejor para vuestra
              empresa y vuestros clientes, a veces rompiendo algunas reglas por
              el camino.
            </span>
          ) : (
            <span>
              Marvik is a{' '}
              <span className="font-biotifbold">
                design, marketing and technology
              </span>{' '}
              consulting firm. We build innovative brands & products and turn
              our clients into{' '}
              <span className="font-biotifbold"> disruptors. </span> We don{"'"}
              t settle until we create a better future for your company and your
              customers, sometimes breaking a few rules along the way.
            </span>
          )}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default banner
