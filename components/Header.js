import MenuButton from "../public/svgs/menuButton.svg";
import MarvikHeaderLogo from "../public/svgs/marvikHeaderLogo.svg";
import { motion } from "framer-motion";

export default function header() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.9,
        ease: "easeInOut",
        duration: 1,
      }}
      className="flex justify-between items-center z-10 px-8 md:px-14 lg:px-24 py-8 w-full fixed"
    >
      <a
        className="text-white no-underline hover:text-white hover:no-underline"
        href="#"
      >
        <MarvikHeaderLogo className="w-[30vw] md:w-[15vw] lg:w-[10vw]" />
      </a>

      <MenuButton className="w-[10vw] md:w-[5vw] lg:w-[4vw]" />
    </motion.nav>
  );
}
