import Head from "next/head";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Karthik @ Work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="container">
        <div id="contentArea">
          <NavBar />
          {children}
        </div>
      </div>
      <style jsx>{`
        #container {
          background-color: #191919;
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        #contentArea {
          width: 100%;
          max-width: 1200px;
          min-width: 1000px;
          background-color: #000;
          margin: 1rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 1rem;
        }
      `}</style>
    </>
  );
}
