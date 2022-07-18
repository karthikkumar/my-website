import Image from "next/image";

function BulletPoint({ className, title, subtitle, description }) {
  return (
    <>
      <div className={className}>
        <div className="point">
          <div className="bullet" />
          <span className="title">{title}</span>
          <span className="subtitle">{subtitle}</span>
        </div>
        <div className="description">{description}</div>
      </div>
      <style jsx>{`
        .point {
          margin: 1rem 0;
        }

        .bullet {
          display: inline-block;
          width: 10px;
          height: 10px;
          background-color: #767676;
          border-radius: 10px;
          border: 2px solid #bcbcbc;
          margin-right: 1rem;
        }

        .title {
          color: #f5f5f5;
          font-size: 1.2rem;
          font-weight: 500;
        }

        .subtitle {
          margin-left: 0.5rem;
          color: #bcbcbc;
          font-size: 1rem;
          font-weight: 500;
        }

        .description {
          color: #f5f5f5;
          font-size: 0.9rem;
          font-weight: 200;
          border-left: 1px solid #3b3b3b;
          padding: 0 0 1rem 0.5rem;
          margin-left: 0.25rem;
        }
      `}</style>
    </>
  );
}

export default function Profile() {
  return (
    <>
      <div className="content">
        <div className="header">
          <h1 className="page-title">my profile</h1>
          <button className="resume">
            <Image
              src="/images/download.png"
              width={10}
              height={10}
              alt="download"
            />
            <span style={{ paddingLeft: "5px" }}>resume</span>
          </button>
        </div>
        <div id="work-experience">
          <h3 className="section-title">work experience</h3>
          <div className="experiences">
            <BulletPoint
              className="experience"
              title="Nagarro"
              subtitle="(2017 - present) - Remote"
              description="As a senior web and mobile developer, my work profile has given
                me the opportunity to work in multiple technology stacks
                simultaneously."
            />
            <BulletPoint
              className="experience"
              title="Mokriya"
              subtitle="(Nov 2015 - Dec 2016) - Remote"
              description="Worked with a Silicon Valley product team remotely as a senior iOS developer with an established work ethic."
            />
            <BulletPoint
              className="experience"
              title="Cognizant"
              subtitle="(Jun 2011 - Nov 2015) - Chennai, India"
              description="Joined as a junior programmer and with proven skillsets has given the opportunity to work with multiple platforms and domains."
            />
            <BulletPoint
              className="experience"
              title="Changepond"
              subtitle="(Apr 2010 - Jun 2011) - Chennai, India"
              description="As a budding software developer gained software development skills and inspiration."
            />
          </div>
        </div>
        <div id="skills">
          <h3 className="section-title">skills</h3>
        </div>
      </div>
      <style jsx>{`
        .content {
          margin: 80px 3rem 1rem 3rem;
          height: calc(100% - (80px + 1rem));
          display: grid;
          grid-template-columns: 50% 50%;
          grid-template-rows: 80px auto;
        }

        .header {
          grid-column: 1 / span 3;
          display: flex;
          gap: 3rem;
          align-items: center;
        }

        h1.page-title {
          color: #fff;
        }

        button.resume {
          width: 90px;
          height: 30px;
          text-align: right;
          padding: 5px 15px;
          color: #fff;
          background-color: #343434;
          border-width: 0;
          border-radius: 15px;
        }

        #work-experience {
          padding: 1rem;
          width: 100%;
          height: 100%;
        }

        #skills {
          padding: 1rem;
          width: 100%;
          height: 100%;
          border-left: 2px solid #212121;
        }

        .section-title {
          color: #767676;
          margin-bottom: 2rem;
        }

        .experience {
          margin: 1rem 0;
        }
      `}</style>
    </>
  );
}
