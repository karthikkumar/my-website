import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Karthik @ Work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="content">
        <div id="profilePic">
          <Image
            src="/images/profile-pic.png"
            height={200}
            width={200}
            alt="profile pic"
          />
        </div>
        <h1 className="title">
          Hey, <br /> I'm Karthik Kumar
        </h1>
      </main>

      <style jsx>{`
        .container {
          background-color: #191919;
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
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

        .content {
          width: 100%;
          flex: 1;
          display: flex;
          gap: 2rem;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        #profilePic {
          width: 10rem;
          height: 10rem;
          background-color: #302f2f;
          border: 4px solid #494848;
          border-radius: 1rem;
        }

        .title {
          color: #fff;
          text-decoration: none;
          margin: 0;
          line-height: 1.15;
          font-size: 3rem;
          text-align: left;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
