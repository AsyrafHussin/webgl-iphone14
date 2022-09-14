import Head from "next/head";
import "../sass/app.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>WebGL iPhone 14 Pro Max</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
