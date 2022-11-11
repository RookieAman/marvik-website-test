import { motion } from "framer-motion";

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

const AnimatedLetters = ({ title, customDelay, setLoading }) => (
  <motion.span
    className="row-title inline-block overflow-hidden"
    variants={bannerVar}
    initial="initial"
    animate="animate"
    custom={customDelay}
    onAnimationComplete={setLoading ? () => setLoading(false) : ""}
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

const loader = ({ setLoading }) => {
  return (
    <section className="main bg-black h-[100vh] w-full">
      <div className="md:pt-[16vw] flex justify-center pb-[7vw] pt-[40vw]">
        <h1 className="relative md:text-[4.5vw] md:tracking-[.10vw] md:leading-[4.2vw] text-4xl font-biotiflight text-white">
          <div className="line">
            <AnimatedLetters customDelay={0.4} title={`Brand,\u00A0`} />
            <AnimatedLetters customDelay={1.5} title={`meet \u00A0 future.`} />
          </div>
          <div className="line">
            <AnimatedLetters customDelay={3} title={`Future,\u00A0`} />
            <AnimatedLetters
              setLoading={setLoading}
              customDelay={4.1}
              title={`meet \u00A0 brand.`}
            />
          </div>
          <div className="line font-biotifbold text-black">
            <span className="row-title inline-block overflow-hidden">
              {["A,\u00A0match\u00A0made\u00A0in\u00A0Marvik."].map(
                (letter, i) => (
                  <span key={i} className="inline-block row-letter">
                    {letter}
                  </span>
                )
              )}
            </span>
          </div>
        </h1>
      </div>
    </section>
  );
};

export default loader;
