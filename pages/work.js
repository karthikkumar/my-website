import Image from "next/image";

function TOHNLogo() {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <h1
        style={{
          lineHeight: "1.8rem",
          fontSize: "1.8rem",
          fontFamily: "Poppins, sans-serif",
          fontWeight: "bold",
          color: "#f0bd27",
          paddingTop: "2px",
          margin: 0,
        }}
      >
        THE TIMES OF <br />
        HACKER NEWS
      </h1>
      <div>
        <Image src="/images/mug.png" width={36} height={50} alt="mug icon" />
        <div
          style={{
            height: "3px",
            width: "36px",
            backgroundColor: "#f44b24",
          }}
        ></div>
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
          <div className="work">
            <div className="logo">
              <TOHNLogo />
            </div>
            <div className="description">
              Why The Times of Hacker News (TOHN) exists? because, Y
              Combinator's Hacker News doesn't have an option to read only the
              top news (by score, not by rank) for a given date. TOHN is just an
              aggregator, source of feed is Hacker News. TOHN is for those who
              want to spend a good and finite amount of time (like coffee time)
              to catch up with the daily hacker news.
            </div>
            <div className="link">
              <a
                href="https://timesofhacker.news"
                target="_blank"
                rel="noopener noreferrer"
              >
                timesofhacker.news
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .content {
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
          align-items: center;
          gap: 2rem;
        }

        .work {
          width: 95%;
          padding: 2rem 2rem 3rem 3rem;
          background-color: #0e182a;
          color: #f0bd27;
          border-radius: 10px;
          display: grid;
          grid-template-columns: 30% 60%;
          grid-template-rows: max-content;
          gap: 2rem;
        }

        .description {
          color: #f5f5f5;
          line-height: 1.5rem;
        }

        .link {
          display: flex;
          align-items: center;
        }

        .link > a {
          color: #81a7ff;
          font-size: 1.2rem;
          font-weight: 400;
        }
      `}</style>
    </>
  );
}
