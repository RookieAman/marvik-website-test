import { useForm } from "react-hook-form";
import MarvikHeaderLogo from "../public/svgs/marvikHeaderLogo.svg";
import { useState } from "react";

const Footer = (props) => {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData, e) => {
    window.location.href = `mailto:contact@marvik.digital?subject=Hola Marvik!&body=Hola Marvik! Somos ${formData.name}. ${formData.message} (${formData.email})`;
    e.target.reset();
    setSent(true);
  };

  return (
    <div
      id="marvikFooter"
      className="bg-[#FFB32B] flex justify-between flex-col-reverse xl:flex-row px-5 py-12 sm:p-[5%]"
    >
      <div className="w-full flex justify-between flex-col">
        <div className="mt-[70px] xl:mt-0">
          <MarvikHeaderLogo className="w-[250px] xl:ml-20 mb-[50px] xl:mb-[70px]" />
          <div className="max-w-[370px] ml-0 xl:ml-20 text-2xl mb-[50px] xl:mb-0">
            <p>
              C/ Balmes, 7 <br /> Barcelona, España
            </p>
            <div className="w-full border-b-2 border-black my-8"></div>
            <p>
              650 California St., Floor 7 <br /> San Francisco, California
            </p>
          </div>
        </div>
        <div className="ml-0 xl:ml-20">
          <div className="mb-8">
            <a
              className="hover:text-[#791BF5] transition-all hover:underline"
              href="/avisolegal"
            >
              {props.lang == "es" ? "Aviso legal" : "Legal terms"}
            </a>
            <span className="mx-3">/</span>
            <a
              className="hover:text-[#791BF5] transition-all hover:underline"
              href="/politicaprivacidad"
            >
              {props.lang == "es" ? "Política de privacidad" : "Privacy policy"}
            </a>
            <span className="mx-3">/</span>
            <a
              className="hover:text-[#791BF5] transition-all hover:underline"
              href="/politicacookies"
            >
              {props.lang == "es" ? "Política de cookies" : "Cookie policy"}
            </a>
          </div>
          <span className="font-biotifbold">© Marvik 2022</span>
        </div>
      </div>
      <div className="h-full w-full">
        <h2 className="text-6xl font-biotifbold">
          {props.lang == "es"
            ? "¿Listo para construir tu futuro?"
            : "Are you ready to build your future?"}
        </h2>
        <div className="w-full border-b-2 border-black my-5 mb-[70px]"></div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-xl max-w-[834px]"
        >
          <input
            {...register("name")}
            placeholder={props.lang == "es" ? "Nombre empresa" : "Company name"}
            className="formInput"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="formInput"
            type="email"
          />
          <textarea
            {...register("message")}
            placeholder={props.lang == "es" ? "Mensaje" : "Message"}
            rows={10}
            className="outline-none w-full py-6 px-10 my-5 rounded-[60px] border border-black text-black placeholder-gray-400 transition-all focus:border-[#6752ed] focus:text-[#6752ed]"
          />
          <button
            type="submit"
            className="w-[200px] h-[64px] rounded-full bg-[#791BF5] text-white text-2xl hover:bg-[#000] transition-all"
          >
            {props.lang == "es" ? "ENVIAR" : "SEND"} {">"}
          </button>
        </form>
        {sent && (
          <div className="line mt-10">
            <span className="text-xl text-[#791BF5]">
              {props.lang == "es"
                ? "Su mensaje se ha enviado con éxito. Pronto nos pondremos en contacto con vosotros."
                : "Your message has been sent successfully. We will soon get in contact with you."}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
