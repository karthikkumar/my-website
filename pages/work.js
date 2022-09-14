import Image from "next/image";

function HNCafeLogo() {
  return (
    <div style={{ display: "flex", gap: "1rem", alignSelf: "center" }}>
      <div>
        <Image
          src="/images/hn-cafe-logo.png"
          width={118}
          height={82}
          alt="hn-cafe logo"
        />
      </div>
    </div>
  );
}

function CheetSheetsLogo() {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <div>
        <Image
          src="/images/cheetsheets.png"
          width={234}
          height={33}
          alt="cheetsheets logo"
        />
      </div>
    </div>
  );
}

function YesCodeLogo() {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <div>
        <Image
          src="/images/yes-code.png"
          width={312}
          height={78}
          alt="yes-code logo"
        />
      </div>
    </div>
  );
}

function JSGymLogo() {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <div>
        <Image
          src="/images/jsgym.png"
          width={156}
          height={75}
          alt="jsgym logo"
        />
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <>
      <div className="content">
        <div>
          <h1>my work</h1>
        </div>
        <div className="works">
          <div className="work hn-cafe">
            <div className="logo">
              <HNCafeLogo />
            </div>
            <div className="description">
              Why HackerNews.Cafe exists? because, Y Combinator's Hacker News
              portal doesn't have an option to read only the top news (by score,
              not by rank) for a given date. HN Cafe is just an aggregator,
              source of feed is Hacker News. HN Cafe is for those who want to
              spend a good and finite amount of time (like coffee time) to catch
              up with the daily hacker news.
            </div>
            <div className="link light-link">
              <a
                href="https://hackernews.cafe"
                target="_blank"
                rel="noopener noreferrer"
              >
                hackernews.cafe
              </a>
            </div>
          </div>
          <div className="work cheetsheets">
            <div className="logo">
              <CheetSheetsLogo />
            </div>
            <div className="description">
              Cheetsheets.dev hosts cheatsheets for coding. Easy reach and handy
              references.
            </div>
            <div className="link dark-link">
              <a
                href="https://cheetsheets.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                cheetsheets.dev
              </a>
            </div>
          </div>
          <div className="work yes-code">
            <div className="logo">
              <YesCodeLogo />
            </div>
            <div className="description">
              Yes-code.dev is for yes-code developers in the era of no-code
              development. Tool to keep code snippets and blocks.
            </div>
            <div className="link dark-link">
              <a
                href="https://yes-code.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                yes-code.dev
              </a>
            </div>
          </div>
          {/* <div className="work jsgym">
            <div className="logo">
              <JSGymLogo />
            </div>
            <div className="description">
              Practice Javascript. Build your Javascript muscles. Equipped with
              Javascript concepts.
            </div>
            <div className="link">
              <a
                href="https://yes-code.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                jsgym.dev
              </a>
            </div>
          </div> */}
        </div>
      </div>
      <style jsx>{`
        .content {
          width: 85%;
          overflow: auto;
          margin: 80px 3rem 1rem 3rem;
          height: calc(100% - (80px + 1rem));
          display: grid;
          grid-template-columns: 100%;
          grid-template-rows: 80px auto;
        }

        h1 {
          color: #f5f5f5;
        }

        .works {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2rem;
        }

        .work {
          width: 100%;
          padding: 2rem;
          color: #f0bd27;
          border-radius: 10px;
          display: grid;
          grid-template-columns: 1.5fr 3.5fr;
          grid-template-areas:
            "logo  description"
            "link link";
          gap: 1.5rem;
        }

        .hn-cafe {
          background-color: #0e182a;
          color: #f5f5f5;
        }

        .cheetsheets {
          background-color: #e3dbbf;
          color: #000000;
        }

        .yes-code {
          background-color: #a0a0a0;
          color: #000000;
        }

        .jsgym {
          background-color: #d1d1d1;
          color: #000000;
        }

        .logo {
          grid-area: logo;
          display: flex;
          align-items: center;
        }

        .description {
          grid-area: description;
          align-self: "start";
          line-height: 1.5rem;
          margin-right: 2rem;
        }

        .link {
          grid-area: link;
          display: flex;
          align-items: center;
        }

        .link > a {
          font-size: 1.2rem;
          font-weight: 400;
        }

        .dark-link > a {
          color: #0500ff;
        }

        .light-link > a {
          color: #8ab4f8;
        }

        @media (max-width: 1100px) {
          .work {
            grid-template-columns: 1fr;
            grid-template-areas:
              "logo"
              "description"
              "link";
            gap: 1.5rem;
          }
        }

        .content {
          -ms-overflow-style: none;
          scrollbar-width: none;
          overflow-y: scroll;
        }

        .content::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 500px) {
          .content {
            margin: 140px 1rem 1rem 1rem;
          }
        }
      `}</style>
    </>
  );
}
