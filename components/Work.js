import MarvikGlyph from "../public/svgs/marvikGlyph.svg";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Work() {
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

  const viewVariants = {
    hidden: (direction) => ({
      x: direction == "left" ? -200 : 200,
      opacity: 0,
    }),
    visible: (delay) => ({
      x: 0,
      opacity: 1,
      transition: { delay: delay, duration: 1, ease: [0.17, 0.55, 0.55, 1] },
    }),
  };

  return (
    <>
      <div className="px-5 md:px-14 mt-[200px] xl:mt-[500px]">
        <motion.h1
          variants={viewVariants}
          initial="hidden"
          animate="visible"
          direction="left"
          delay={0.5}
          className="uppercase text-6xl md:text-[15vw] text-biotiflight"
        >
          Work
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
            We build brands and elevate companies to the status of game
            changers. We don’t settle until we create a better tomorrow for your
            company, your clients, and our society, sometimes breaking a few
            boundaries along the way.
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
              className="font-biotifbold text-6xl md:text-9xl z-10"
            >
              Realfooding
            </motion.h2>
          </div>
          <div className="flex justify-center mb-16 sm:pl-[10vw] -z-10">
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 1,
                ease: [0.17, 0.55, 0.55, 1],
              }}
              viewport={{ once: true }}
            >
              <Image
                src="https://dummyimage.com/1800x1200/aba2ab/917e91.jpg"
                alt="user profile picture"
                width={1800}
                height={1200}
              />
            </motion.div>
          </div>
          <div className="flex justify-between sm:ml-[20vw] max-w-[1700px]  mb-16">
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
              <h3 className="max-w-[370px] text-2xl font-biotifbold mb-6">
                How we transformed a social media movement into a leading food
                brand
              </h3>
              <ul className="list-none text-gray-400 text-xl">
                <li>branding</li>
                <li>strategy</li>
                <li>content</li>
                <li>packaging</li>
                <li>ux/ui design</li>
                <li>busieness transformation</li>
              </ul>
            </motion.div>

            <div className="line text-right self-end text-xl sm:text-[3.5vw] sm:tracking-[.05vw] sm:leading-[3.2vw] text-gray-300">
              social movement, <br />
              leading brand.
            </div>
          </div>
          <div className="sm:ml-[20vw]">
            <motion.a
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 1,
                ease: [0.17, 0.55, 0.55, 1],
              }}
              viewport={{ once: true }}
              href="#"
              className="text-xl sm:text-2xl pb-2 text-purple-600 border-b-2 border-purple-600 font-biotifbold"
            >
              <span>SEE CASE STUDY</span>
            </motion.a>
          </div>
        </div>
      </div>

      <div className="w-full mb-[200px] sm:mb-[500px]">
        <div className="w-full h-[800px] md:h-[1400px] bg-slate-600">
          <div className="flex h-full justify-between sm:ml-[5vw] py-16 sm:px-14 px-5">
            <div className="line">
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
                Hub nd <br /> Rock
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
                <h3 className="text-white max-w-[370px] text-2xl font-biotifbold mb-6">
                  How we transformed a social media movement into a leading food
                  brand
                </h3>
                <ul className="list-none text-gray-400 text-xl mb-16">
                  <li>branding</li>
                  <li>strategy</li>
                  <li>content</li>
                  <li>packaging</li>
                  <li>ux/ui design</li>
                  <li>busieness transformation</li>
                </ul>

                <div className="line">
                  <a
                    href="#"
                    className="text-xl sm:text-2xl pb-2 text-purple-600 border-b-2 border-purple-600 font-biotifbold"
                  >
                    <span>SEE CASE STUDY</span>
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="line self-end text-2xl sm:text-[6.5vw] sm:tracking-[.05vw] sm:leading-[5.0vw] text-gray-300">
              collaborative <br />
              innovation
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full mb-[200px] sm:mb-[500px]">
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
            className="font-biotifbold text-6xl md:text-9xl z-10"
          >
            Shukran
          </motion.h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-center px-5">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 1,
              ease: [0.17, 0.55, 0.55, 1],
            }}
            viewport={{ once: true }}
            className="sm:max-w-[400px] xl:max-w-[800px] sm:self-center"
          >
            <Image
              src="https://dummyimage.com/800x1100/aba2ab/917e91.jpg"
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
            <h3 className="max-w-[370px] text-2xl font-biotifbold mb-6 mt-20">
              How we transformed a social media movement into a leading food
              brand
            </h3>
            <ul className="list-none text-gray-400 text-xl mb-16">
              <li>branding</li>
              <li>strategy</li>
              <li>content</li>
              <li>packaging</li>
              <li>ux/ui design</li>
              <li>busieness transformation</li>
            </ul>

            <div className="line">
              <a
                href="#"
                className="text-xl sm:text-2xl pb-2 text-purple-600 border-b-2 border-purple-600 font-biotifbold"
              >
                <span>SEE CASE STUDY</span>
              </a>
            </div>
          </motion.div>

          <div className="line self-end text-3xl leading-6 sm:text-[5.5vw] sm:tracking-[.05vw] sm:leading-[4.5vw] text-gray-300">
            food <br />
            of the <br />
            future
          </div>
        </div>
      </div> */}

      {/* <div className="w-full mb-[800px] sm:mb-[500px]">
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
            className="font-biotifbold text-6xl md:text-9xl z-10 mb-[100px]"
          >
            myrealfood
          </motion.h2>
        </div>
        <div className="flex justify-center items-center flex-col md:flex-row">
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
                delay: 0.8,
                duration: 1,
                ease: [0.17, 0.55, 0.55, 1],
              }}
              viewport={{ once: true }}
              className="mt-10 mb-6 md:my-0 max-w-[370px] sm:max-w-[400px] xl:max-w-[700px] 2xl:max-w-[800px] sm:self-center mx-5 sm:mx-[2vw]"
            >
              <Image
                src="https://dummyimage.com/800x1100/aba2ab/917e91.jpg"
                alt="Shukran Project"
                width={800}
                height={1100}
              />
            </motion.div>
          </div>

          <div className="flex w-full justify-center md:block md:w-auto">
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
              className="line absolute sm:ml-[34px] mt-[50px] md:mt-[100px] xl:mt-[200px]"
            >
              <h3 className="max-w-[570px] text-2xl font-biotifbold mb-6 mt-20">
                Dominating the charts, motherfuckers
              </h3>
              <ul className="list-none text-gray-400 text-xl mb-16">
                <li>branding</li>
                <li>strategy</li>
                <li>content</li>
                <li>packaging</li>
                <li>ux/ui design</li>
                <li>busieness transformation</li>
              </ul>

              <div className="line">
                <a
                  href="#"
                  className="text-xl sm:text-2xl pb-2 text-purple-600 border-b-2 border-purple-600 font-biotifbold"
                >
                  <span>SEE CASE STUDY</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div> */}

      {/* <div className="w-full flex justify-center items-center mb-[800px] sm:mb-[500px]">
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
            href="#"
            className="text-lg sm:text-4xl pb-2 text-purple-600 border-b-2 border-purple-600 font-biotifbold"
          >
            <span>EXPLORE OUR WORK</span>
          </a>
        </div>
      </div> */}
    </>
  );
}
