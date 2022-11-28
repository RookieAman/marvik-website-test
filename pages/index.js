import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Work from "../components/Work";
import Services from "../components/Services";
import Clients from "../components/Clients";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import CookiePopup from "../components/CookiePopup";

export default function Home(props) {
  const { locale } = useRouter();
  console.log(props.marvik.services);
  console.log(locale);

  const [loading, setLoading] = useState(false);

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
        <title>Marvik - The future shaping company</title>
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
          <CookiePopup />
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

export async function getStaticProps({ locale }) {
  const response = await import(`../lang/${locale}.json`);

  return {
    props: {
      marvik: response.default,
    },
  };
}
