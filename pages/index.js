import { useEffect, useState } from "react";

import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Work from "../components/Work";
import Services from "../components/Services";
import Clients from "../components/Clients";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

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
        <meta
          name="google-site-verification"
          content="u2dwTdbfPb-ZSPEvicJT3OTZQxSd2KxZIH_K9j0Uod0"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <Header />
          <Banner />
          <Work />
          <Services />
          <Clients />
          <Footer />
        </>
      )}
    </div>
  );
}
