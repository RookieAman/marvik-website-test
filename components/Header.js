import MarvikGlyph from '../public/svgs/marvikGlyph.svg'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

const clsStyle = {
  fill: 'none',
  stroke: '#6752ed',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeWidth: 5,
}

const svgVariant = {
  start: {
    opacity: 0,
    pathLength: 0,
  },
  finished: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 0,
      duration: 2,
      ease: 'easeInOut',
    },
  },
}

const svgVariant2 = {
  start: {
    opacity: 1,
    pathLength: 1,
  },
  finished: {
    opacity: 1,
    pathLength: 0,
    transition: {
      delay: 0.3,
      duration: 1,
      ease: 'easeInOut',
      repeatType: 'reverse',
      repeat: 1,
    },
  },
}

const Header = () => {
  const router = useRouter()

  const changeLang = () => {
    router.push(router.pathname, router.pathname, {
      locale: router.locale == 'es' ? 'en' : 'es',
    })
  }

  const [small, setSmall] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setSmall(window.pageYOffset > 200)
      )
    }
  }, [])

  return (
    <>
      <AnimatePresence>
        {small && (
          <motion.nav
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              ease: 'easeInOut',
              duration: 0.5,
            }}
            exit={{ opacity: 0, y: -80 }}
            className="z-10 px-8 md:px-14 lg:px-24 py-8 fixed"
          >
            <Link href="/">
              <MarvikGlyph className="w-[12vw] md:w-[3vw] lg:w-[100px]" />
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!small && (
          <motion.nav
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              ease: 'easeInOut',
              duration: 0.5,
            }}
            exit={{ opacity: 0, y: -80 }}
            className="flex justify-between md:justify-center items-center z-10 px-8 md:px-14 lg:px-24 py-8 w-full fixed"
          >
            <div className="flex justify-center items-center">
              {/* <MarvikHeaderLogo className="w-[30vw] md:w-[15vw] lg:w-[10vw]" /> */}
              {/* <MarvikGlyph className="w-[10vw] md:w-[10vw] lg:w-[5vw]" /> */}
              <svg
                className="w-[12vw] md:w-[3vw] lg:w-[3vw]"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 112.8 168.76"
              >
                <motion.path
                  variants={svgVariant}
                  initial="start"
                  animate="finished"
                  style={clsStyle}
                  d="M87.18,27.93c-2.38,6.46-4.43,13.05-6.75,19.53-.33,.9-.65,1.8-.99,2.69-8.37,22.32-16.44,44.75-24.42,67.21-.9,2.51-3.52,4.29-6.23,4.3-1.91,.01-3.82,0-5.73,0-2.39-.04-4.35-.03-5.77-.01-.59,.01-2.19,.09-4.4,.1-2.26,0-3.9-.07-6.15-.09-4.39-.05-7.02-3.92-5.78-8.13,2.09-7.05,4.77-13.88,7.2-20.81,8.04-22.94,15.99-45.91,23.99-68.86,.99-2.83,3.44-4.54,6.47-4.54,7.51-.02,15.02-.09,22.53,.02,4.58,.07,7.69,4.09,6.03,8.59Z"
                />
                <motion.path
                  variants={svgVariant2}
                  initial="start"
                  animate="finished"
                  style={clsStyle}
                  d="M99.38,56.76c-2.38,6.46-4.43,13.05-6.75,19.53-.33,.9-.65,1.8-.99,2.69-8.37,22.32-16.44,44.75-24.42,67.21-.9,2.51-3.52,4.29-6.23,4.3-1.91,.01-3.82,0-5.73,0-2.39-.04-4.35-.03-5.77-.01-.59,.01-2.19,.09-4.4,.1-2.26,0-3.9-.07-6.15-.09-4.39-.05-7.02-3.92-5.78-8.13,2.09-7.05,4.77-13.88,7.2-20.81,8.04-22.94,15.99-45.91,23.99-68.86,.99-2.83,3.44-4.54,6.47-4.54,7.51-.02,15.02-.09,22.53,.02,4.58,.07,7.69,4.09,6.03,8.59Z"
                />
              </svg>

              <div className="inline-block w-[130px] md:w-[7vw] lg:w-[7vw]">
                <Link href={'/'}>
                  <Image
                    width={200}
                    height={59}
                    src="/svgs/marvikText.png"
                    alt="Logo text"
                  />
                </Link>
              </div>

              <div className="mt-[10%] font-biotifbold ml-2 hidden md:block cursor-default text-xs lg:text-sm">
                <span>The future-shaping company</span>
              </div>
            </div>

            <button
              onClick={(e) => {
                window.open('/kitdigital', '_self')
              }}
              className="flex font-biotif mr-16 md:mr-0 text-lg md:text-2xl mt-2 items-center md:absolute md:right-[10rem] border-b-2 mb-2 border-[#791BF5] text-[#791BF5] hover:text-black hover:border-black transition-all uppercase"
            >
              KIT DIGITAL
            </button>

            <button
              onClick={changeLang}
              className="flex items-center absolute right-7 md:right-20 border-2 border-black px-3 rounded-[20px] hover:bg-black hover:text-white transition-all uppercase"
            >
              {router.locale == 'en' ? 'ES' : 'EN'}
            </button>

            {/* <MenuButton className="w-[10vw] md:w-[5vw] lg:w-[4vw]" /> */}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
