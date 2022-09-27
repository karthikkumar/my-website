import { useContext } from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import { useThemeContext } from "./ThemeProvider";

export default function Layout({ children }) {
  const { colors } = useThemeContext();
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
          background-color: ${colors.app};
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        #main {
          width: 75%;
          height: 100%;
          background-color: ${colors.main};
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
        @media (max-width: 500px) {
          #main {
            width: 100%;
            margin: 0;
          }
        }
      `}</style>
    </>
  );
}
