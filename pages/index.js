import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Js | SPA </title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css"
        ></link>
      </Head>

      <Header />
      <Main />
      <Footer />
    </>
  );
}
