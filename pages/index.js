import Image from "next/image";
import { useThemeContext } from "../components/ThemeProvider";

const openInNewTab = (event, url) => {
  event.preventDefault();
  window.open(url, "_blank", "noopener,noreferrer");
};

export default function Index() {
  const { darkMode, colors } = useThemeContext();
  const iconSuffix = darkMode ? "dark" : "light";
  return (
    <>
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
            Hi, <br /> I'm Karthik Kumar
          </h1>
          <p>Software Engineer</p>
          <p className="description">
            As a perpetual learner, my career has taken me from being an iOS
            developer to frontend developer to full-stack developer and
            eventually becoming a product engineer
          </p>
          <div id="social-profiles">
            <a
              className="link"
              href="https://github.com/karthikkumar"
              onClick={(event) =>
                openInNewTab(event, "https://github.com/karthikkumar")
              }
            >
              <Image
                src={`/images/github-${iconSuffix}.png`}
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
                src={`/images/in-${iconSuffix}.png`}
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
                src={`/images/email-${iconSuffix}.png`}
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
                src={`/images/whatsapp-${iconSuffix}.png`}
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
                src={`/images/twitter-${iconSuffix}.png`}
                width={33}
                height={26}
                alt="twitter"
              />
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        #content {
          width: 700px;
          height: 400px;
          display: flex;
          gap: 2rem;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        #profile-pic {
          width: 10rem;
          height: 10rem;
          background-color: ${colors.profileBg};
          border: 4px solid ${colors.profileBorder};
          border-radius: 1rem;
          align-self: flex-start;
        }

        #profile-summary {
          display: flex;
          gap: 0.6rem;
          flex-direction: column;
          color: ${colors.profileText};
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

        #social-profiles {
          width: 100%;
        }

        .link {
          margin-right: 1.5rem;
          cursor: pointer;
        }

        @media (max-width: 1100px) {
          #content {
            width: 80%;
            height: 600px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          #profile-summary {
            width: 100%;
          }
          .link {
            margin-right: 1.25rem;
          }
        }

        @media (max-width: 500px) {
          #profile-pic {
            width: 6rem;
            height: 6rem;
          }
          .title {
            font-size: 2rem;
          }
          .link {
            margin-right: 1.1rem;
          }
        }

        @media (max-height: 800px) {
          #content {
            margin-top: 20vh;
          }
        }
      `}</style>
    </>
  );
}
