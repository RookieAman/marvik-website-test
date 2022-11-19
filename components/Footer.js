import { useForm } from "react-hook-form";
import MarvikHeaderLogo from "../public/svgs/marvikHeaderLogo.svg";

const Footer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData, e) => {
    window.location.href = `mailto:contact@marvik.digital?subject=Hola Marvik!&body=Hola Marvik! Somos ${formData.name}. ${formData.message} (${formData.email})`;
    e.target.reset();
  };

  return (
    <div
      id="marvikFooter"
      className="bg-[#FFB32B] flex justify-between flex-col-reverse xl:flex-row px-5 py-12 sm:p-[5%]"
    >
      <div className="w-full flex justify-between flex-col">
        <div className="mt-[70px] xl:mt-0">
          <MarvikHeaderLogo className="w-[250px] md:w-[350px] mb-[50px] xl:mb-[70px]" />
          <div className="max-w-[370px] ml-0 xl:ml-20 text-xl mb-[50px] xl:mb-0">
            <p>
              C/ Balmes, 7 <br /> Barcelona, España
            </p>
            <div className="w-full border-b-2 border-black my-5"></div>
            <p>
              650 California St., Floor 7 <br /> San Francisco, California
            </p>
          </div>
        </div>
        <div className="ml-0 xl:ml-20">
          <ul className="mb-4">
            <li className="pointer">
              <span>Términos y Condiciones</span>
            </li>
            <li className="pointer">
              <span>Política de Privacidad</span>
            </li>
          </ul>
          <span className="font-biotifbold">© Marvik 2022</span>
        </div>
      </div>
      <div className="h-full w-full">
        <h2 className="text-6xl font-biotifbold">
          ¿Listo para construir tu futuro?
        </h2>
        <div className="w-full border-b-2 border-black my-5"></div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-xl max-w-[834px]"
        >
          <input
            {...register("name")}
            placeholder="Nombre empresa"
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
            placeholder="Mensaje"
            rows={10}
            className="outline-none w-full py-6 px-10 my-5 rounded-[60px] border border-black text-black placeholder-gray-400 transition-all focus:border-[#6752ed] focus:text-[#6752ed]"
          />
          <button
            type="submit"
            className="w-[200px] h-[64px] rounded-full bg-[#791BF5] text-white text-2xl hover:bg-[#000] transition-all"
          >
            ENVIAR {">"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
