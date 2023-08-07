import Header from "../components/Header";
import Footer from "../components/Footer";
import Service from "../components/Service";
import Image from "next/image";

const kitdigtal = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center mb-[200px] pt-[250px] px-5">
        <h1 className="font-biotifbold text-5xl py-12 marvikColor text-center">
          Te ayudamos a <br />
          digitalizar tu empresa
        </h1>
        <div
          onClick={(e) => {
            window.location.href =
              "mailto:contact@marvik.digital?subject=Kit Digital&body=Hola! Me gustaría digitalizar mi empresa.";
          }}
          className="font-biotifbold text-xl px-12 py-3 marvikColor border-[1px] border-[#791BF5] rounded-full cursor-pointer hover:bg-[#791BF5] hover:text-white transition duration-300"
        >
          Contacta con nosotros
        </div>
      </div>

      {/* Que es el kit digital */}
      <div className="px-5 md:px-14">
        <div className="flex items-center flex-col xl:flex-row h-full justify-center sm:ml-[5vw] py-16 sm:px-14 px-5 z-10">
          <div>
            <h1 className="font-biotifbold text-5xl md:text-7xl xl:text-9xl sm:pt-[7%] mb-6 sm:mb-16 pt-12 max-w-[800px]">
              ¿Qué es el Kit Digital?
            </h1>
            <span className="line block w-[150px] border-b-2 border-black mb-5"></span>
            <div className="font-biotif text-xl max-w-[600px] md:ml-5 mb-6">
              Kit Digital es una iniciativa del Gobierno de España, cuyo
              objetivo es subvencionar la implantación de soluciones digitales
              disponibles en el mercado para conseguir un avance significativo
              en el nivel de madurez digital.
            </div>
          </div>

          <Image
            src={"/assets/kitdigitalSection1.png"}
            alt="KitDigital"
            width={810}
            height={1001}
          />
        </div>
      </div>

      {/* Nuestros servicios */}
      <div className="px-5 md:px-14">
        <div className="flex justify-center">
          <h1 className="font-biotifbold text-center text-5xl md:text-7xl xl:text-9xl sm:pt-[7%] mb-6 sm:mb-32 pt-12 max-w-[800px]">
            Nuestros servicios
          </h1>
        </div>
        <div className="flex justify-center flex-wrap max-w-[1900px] mx-auto mb-6 sm:mb-[150px]">
          <Service
            cardTitle="Sitio web y presencia básica en Internet"
            serviceList={[
              "Diseño y programación de páginas web: en Marvik creamos páginas web con diseños rompedores que se adaptan a tu branding y te ayudan a conseguir tus objetivos empresariales. Para la programación usamos tecnologías punteras que te ofrecen flexibilidad, estabilidad y te permiten gestionar fácilmente tu sitio web.",
              "Responsive y accesibilidad",
              "Posicionamiento básica en Internet",
              "Dominio & hosting",
              "Optimización de la presencia en buscadores",
              "Multidioma",
            ]}
            minPrice="2.000"
            maxPrice="12.000"
          ></Service>
          <Service
            cardTitle="Comercio
            electrónico"
            serviceList={[
              "Creación del e-commerce y alta de los productos",
              "Implementación de pasarelas de pago",
              "Diseño responsive",
              "Accesibilidad",
              "Posicionamiento básico en Internet",
              "Integración con plataformas de logística",
            ]}
            minPrice="2.000"
            maxPrice="20.000"
          ></Service>
          <Service
            cardTitle="Gestión de redes sociales"
            serviceList={[
              "Social Media Plan",
              "Monitorización de redes sociales",
              "Optimización de los perfiles sociales",
              "Implementación de las estrategias de redes sociales",
            ]}
            minPrice="2.500"
            maxPrice="6.000"
          ></Service>
          <Service
            cardTitle="Business Intelligence
            y Analítica"
            serviceList={[
              "Integración de datos con otras bases de datos",
              "Almacenamiento de datos",
              "Creación de paneles de datos estructurados y visuales",
              "Exportación de datos",
            ]}
            minPrice="4.000"
            maxPrice="8.000"
          ></Service>
          <Service
            cardTitle="Servicios de 
            oficina virtual"
            serviceList={[
              "Colaboración en equipos de trabajo: dotar de herramientas para la interacción de los equipos en los procesos de ideación o resolución de problemas. Implementación de herramientas de gestión de equipos y proyectos.",
              "Almacenar y compartir archivos",
              "Compatibilidad con dispositivos móviles",
              "Calendario y agenda",
            ]}
            minPrice="2.000"
            maxPrice="12.000"
          ></Service>
          <Service
            cardTitle="Gestión de procesos"
            serviceList={[
              "Digitalización y automatización de procesos y flujos de trabajo. Transformación de los procesos de contabilidad/finanzas, facturación, proyectos, inventario, compras y pagos, recursos humanos y logística.",
              "Integración con plataformas de terceros",
            ]}
            minPrice="4.000"
            maxPrice="6.000"
          ></Service>
          <Service
            cardTitle="Marketplace"
            serviceList={[
              "Estudio de mercado y alta en las plataformas",
              "Análisis de la competencia",
              "Diseño y definición de la estrategia de negocio",
              "Producción del catálogo de referencias",
              "Creación del contenido de listing",
              "Alta de referencias",
            ]}
            minPrice="2.000"
            maxPrice="5.000"
          ></Service>
          <Service
            cardTitle="Gestión de
            clientes"
            serviceList={[
              "Implementación de CRM",
              "Gestión de clientes potenciales (leads)",
              "Creación de flujos de gestión de clientes",
              "Creación de un plan comercial",
              "Reporting, planificación y seguimiento comercial",
              "Gestión documental",
              "Integración con diversas plataformas",
            ]}
            minPrice="2.000"
            maxPrice="6.000"
          ></Service>
          <Service
            cardTitle="Presencia avanzada
            en Internet"
            serviceList={[
              "Posicionamiento básico en Internet",
              "Análisis de palabras clave",
              "Análisis de la competencia",
              "SEO On-Page",
              "SEO Off-Page",
              "Informes mensuales de seguimiento",
            ]}
            minPrice="2.000"
            maxPrice="5.000"
          ></Service>
        </div>
      </div>

      {/* ¿A quién va dirigido? */}
      <div className="px-5 md:px-14 mb-6 sm:mb-[50px]">
        <div className="flex items-center flex-col xl:flex-row h-full justify-center sm:ml-[5vw] py-16 sm:px-14 px-5 z-10">
          <Image
            src={"/assets/kitdigitalSection2.png"}
            alt="KitDigital"
            width={810}
            height={1116}
          />

          <div className="md:ml-[50px] order-first md:order-last">
            <h1 className="font-biotifbold text-5xl md:text-7xl xl:text-9xl sm:pt-[7%] mb-6 sm:mb-16 pt-12 max-w-[800px]">
              ¿A quién va dirigido?
            </h1>
            <span className="line block w-[150px] border-b-2 border-black mb-5"></span>
            <div className="font-biotif text-xl max-w-[600px] md:ml-5 mb-6">
              Las soluciones digitales que proporciona el Kit Digital están
              orientadas a las necesidades de las pequeñas empresas,
              microempresas y trabajadores autónomos, pertenecientes a cualquier
              sector o tipología de negocio. Si la empresa beneficiaria cumple
              las condiciones establecidas en las bases de la convocatoria de
              ayuda del Kit Digital, podrá disponer de un bono digital para
              acceder a las soluciones de digitalización. <br />
              <br />
              El importe máximo de tu bono digital dependerá del tamaño de tu
              empresa: <br />
              <br />
              <b>SEGMENTO I:</b>
              <br />
              Pequeñas empresas de entre 10 y menos de 50 empleados. Importe
              bono: 12.000€ <br />
              <br />
              <b>SEGMENTO II:</b>
              <br />
              Pequeñas empresas o Microempresas de entre 3 y menos de 10
              empleados. Importe bono: 6.000€ <br />
              <br />
              <b>SEGMENTO III:</b>
              <br />
              Pequeñas empresas o Microempresas de entre 0 y menos de 3
              empleados y personas en situación de autoempleo. Importe bono:
              2.000€
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center py-[250px] px-5">
        <h1 className="font-biotifbold text-7xl py-12 pb-6 marvikColor text-center">
          ¿Cómo solicitar tu bono?
        </h1>
        <span className="font-biotif text-xl mb-[50px]">
          Te asesoramos sin compromiso
        </span>
        <div
          onClick={(e) => {
            window.location.href =
              "mailto:contact@marvik.digital?subject=Kit Digital&body=Hola! Me gustaría digitalizar mi empresa.";
          }}
          className="font-biotifbold text-xl px-12 py-4 marvikColor border-[1px] border-[#791BF5] rounded-full cursor-pointer hover:bg-[#791BF5] hover:text-white transition duration-300"
        >
          Contacta con nosotros
        </div>
      </div>

      <div className="px-5 flex flex-col items-center">
        <Image
          src={"/assets/bannerGob.png"}
          alt="KitDigital"
          width={1670}
          height={197}
        />
        <div className="font-biotif text-2xl text-center my-[100px] max-w-[1200px]">
          Marvik se encuentra en trámites para convertirse en agente
          digitalizador de KIT DIGITAL. Te guiamos en la solicitud de las
          ayudas. Además, te asesoramos sobre cual es la mejor solución digital
          para tu negocio.
        </div>
      </div>

      <Footer />
    </>
  );
};

export default kitdigtal;
