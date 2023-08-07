const Service = (props) => {
  return (
    <>
      <div className="w-[550px] h-[870px] mx-7 my-10 shadow-[0px_-30px_0px_0px_#B882FF] rounded-[60px] border-[#791BF5] border-2 px-8 py-[70px] flex flex-col justify-start">
        <div className="cardStart">
          <h3 className="font-biotifbold text-3xl">{props.cardTitle}</h3>
          <div className="w-full border-b-[1px] border-black mb-8"></div>
        </div>

        <ul className="list-disc px-5 text-xl font-biotif cardMiddle">
          {props.serviceList.map((service, index) => (
            <li key={index} className="mb-3">
              {service}
            </li>
          ))}
        </ul>

        <div className="cardBottom mt-auto text-xl font-biotif text-gray-400">
          <div className="w-full border-b-[1px] border-black mb-3"></div>
          <span>Rango de precios:</span>
          <br />
          <span>
            {props.minPrice}€ - {props.maxPrice}€
          </span>
        </div>
      </div>
    </>
  );
};

export default Service;
