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
        <div id="main">{children}</div>
      </div>
      <style jsx>{`
        #app {
          position: fixed;
          width: 100vw;
          height: 100vh;
          background-color: #090909;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        #main {
          width: 75%;
          height: 100%;
          background-color: #000;
          margin: 1rem 0;
          border-radius: 1rem;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 1100px) {
          #main {
            width: 90%;
          }
        }
      `}</style>
    </>
  );
}
