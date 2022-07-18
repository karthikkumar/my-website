import Image from "next/image";

const openInNewTab = (event, url) => {
  event.preventDefault();
  window.open(url, "_blank", "noopener,noreferrer");
};

export default function Index() {
  return (
    <>
      <div id="center">
        <div id="content-wrapper">
          <div id="content">
            <div id="profile-pic">
              <Image
                src="/images/profile-pic.png"
                height={200}
                width={200}
                alt="profile pic"
              />
            </div>
            <div id="profile-summary">
              <h1 className="title">
                Hey, <br /> I'm Karthik Kumar
              </h1>
              <p>Product Engineer</p>
              <p className="description">
                As a perpetual learner, my career has taken me from being an iOS
                developer to frontend developer to full-stack developer and
                eventually becoming a product engineer
              </p>
              <div>
                <a
                  className="link"
                  href="https://github.com/karthikkumar"
                  onClick={(event) =>
                    openInNewTab(event, "https://github.com/karthikkumar")
                  }
                >
                  <Image
                    src="/images/github.png"
                    width={40}
                    height={40}
                    alt="github"
                  />
                </a>
                <a
                  className="link"
                  href="https://www.linkedin.com/in/karthikkumar-k/"
                  onClick={(event) =>
                    openInNewTab(
                      event,
                      "https://www.linkedin.com/in/karthikkumar-k/"
                    )
                  }
                >
                  <Image
                    src="/images/in.png"
                    width={35}
                    height={35}
                    alt="linkedin"
                  />
                </a>
                <a
                  className="link"
                  href="mailto:hello@karthik.work"
                  onClick={(event) =>
                    openInNewTab(event, "mailto:hello@karthik.work")
                  }
                >
                  <Image
                    src="/images/email.png"
                    width={38}
                    height={24}
                    alt="email"
                  />
                </a>
                <a
                  className="link"
                  href="https://wa.me/919994190014?text=hello"
                  onClick={(event) =>
                    openInNewTab(event, "https://wa.me/919994190014?text=hello")
                  }
                >
                  <Image
                    src="/images/whatsapp.png"
                    width={32}
                    height={32}
                    alt="whatsapp"
                  />
                </a>
                <a
                  className="link"
                  href="https://twitter.com/karthikkumar_k"
                  onClick={(event) =>
                    openInNewTab(event, "https://twitter.com/karthikkumar_k")
                  }
                >
                  <Image
                    src="/images/twitter.png"
                    width={33}
                    height={26}
                    alt="twitter"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        #center {
          width: 100%;
          height: 100%;
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        #content-wrapper {
          display: flex;
          flex: 1;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        #content {
          width: 100%;
          display: flex;
          flex: 1;
          gap: 2rem;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        #profile-pic {
          width: 10rem;
          height: 10rem;
          background-color: #302f2f;
          border: 4px solid #494848;
          border-radius: 1rem;
          align-self: flex-start;
        }

        #profile-summary {
          flex: 1;
          display: flex;
          gap: 0.6rem;
          flex-direction: column;
          color: #f5f5f5;
          width: 500px;
        }

        .title {
          text-decoration: none;
          margin: 0;
          line-height: 1.15;
          font-size: 3rem;
          text-align: left;
        }

        .description {
          margin-bottom: 2rem;
        }

        .link {
          margin-right: 1.5rem;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
