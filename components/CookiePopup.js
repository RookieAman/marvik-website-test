import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CookiePopup = () => {
  const [cookieAccept, setCookieAccept] = useState(true);

  useEffect(() => {
    window?.localStorage?.getItem("cookiesAccept")
      ? setCookieAccept(false)
      : setCookieAccept(true);
  }, []);

  function updateCookies(result) {
    setCookieAccept(!cookieAccept);
    localStorage.setItem("cookiesAccept", result);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, duration: 0.6 }}
      className="flex w-full justify-center"
    >
      {cookieAccept && (
        <div className="bg-black rounded-[20px] min-h-[100px] flex items-center max-w-fit fixed bottom-10 z-40 mx-5">
          <div className=" flex xl:flex-row flex-col">
            <span className="text-white p-8 pb-0 xl:p-8 text-xl text-center my-auto">
              Utilizamos cookies para ofrecerte la mejor experiencia en nuestra
              web. Puedes aprender más sobre qué cookies utilizamos en nuestra{" "}
              <a className="font-biotifbold underline" href="#">
                política de cookies.
              </a>
            </span>
            <div className="flex justify-center items-center min-w-[420px] p-8 pt-4 xl:p-0">
              <button
                onClick={() => {
                  updateCookies(true);
                }}
                className="w-[180px] h-[60px] rounded-[20px] bg-white text-black border-white border-2 ml-4 transition-all hover:bg-[#6752ed] hover:text-white hover:border-black"
              >
                Aceptar
              </button>
              <button
                onClick={() => {
                  updateCookies(false);
                }}
                className="w-[180px] h-[60px] rounded-[20px] bg-black text-white border-white border-2 mx-4 hover:bg-[#6752ed] hover:text-white hover:border-black"
              >
                Rechazar
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default CookiePopup;
