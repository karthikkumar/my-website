import Head from "next/head";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Karthik @ Work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="app">
        <NavBar />
        <div id="container">{children}</div>
      </div>
      <style jsx>{`
        #app {
          width: 100vw;
          height: 100vh;
          background-color: #191919;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        #container {
          width: 100%;
          height: 100%;
          max-width: 1200px;
          min-width: 1000px;
          background-color: #000;
          margin: 1rem 0;
          border-radius: 1rem;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
