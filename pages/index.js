import { useEffect, useState } from "react";

import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Work from "../components/Work";
import Services from "../components/Services";
import Clients from "../components/Clients";
import Loader from "../components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document
          .querySelector("body")
          .classList.add("overflow-hidden", "h-[100vh]")
      : document
          .querySelector("body")
          .classList.remove("overflow-hidden", "h-[100vh]");
  }, [loading]);

  return (
    <div className="font-biotif w-full overflow-x-hidden">
      <Head>
        <title>Marvik Website</title>
      </Head>

      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <Header />
          <Banner />
          {/* <Work /> */}
          <Services />
          <Clients />
          <div className="h-[1000px] bg-[#FFB32B]"></div>
        </>
      )}
    </div>
  );
}
