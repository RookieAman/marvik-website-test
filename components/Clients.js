import { motion } from "framer-motion";
import Image from "next/image";

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
          Clients
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
      </div>
      <div className="w-full flex justify-center mb-[300px]">
        <div className="flex max-w-[1900px] justify-around flex-wrap">
          {clientList.map((client, i) => (
            <div className="m-3 md:m-12 w-[100px] lg:w-auto" key={i}>
              <Image
                src="https://dummyimage.com/300x200/4d8f7b/fff"
                alt={client}
                width={300}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const clientList = [
  "orange",
  "apple",
  "watermelon",
  "orange",
  "apple",
  "watermelon",
  "orange",
  "apple",
  "watermelon",
  "orange",
  "apple",
  "watermelon",
];
