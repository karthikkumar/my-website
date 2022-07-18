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

function Skill({ url, width, height = 32, alt }) {
  return (
    <>
      <div className="skill">
        <Image src={url} width={width} height={height} alt={alt} />
      </div>
      <style jsx>{`
        .skill {
          display: inline-block;
          border: 4px solid #000;
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
          <div>
            <div className="skills-section">
              <h4>Web Frontend</h4>
              <div className="skill-set">
                <Skill
                  url="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                  width={129}
                  alt="javascript"
                />
                <Skill
                  url="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
                  width={135}
                  alt="typescript"
                />
                <Skill
                  url="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                  width={100}
                  alt="html5"
                />
                <Skill
                  url="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                  width={90}
                  alt="css3"
                />
                <Skill
                  url="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
                  width={86}
                  alt="sass"
                />
                <Skill
                  url="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                  width={100}
                  alt="react"
                />
                <Skill
                  url="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"
                  width={96}
                  alt="redux"
                />
              </div>
            </div>
            <div className="skills-section">
              <h4>Mobile App</h4>
              <div className="skill-set">
                <Skill
                  url="https://img.shields.io/badge/Swift-FA7343?style=for-the-badge&logo=swift&logoColor=white"
                  width={100}
                  alt="swift"
                />
                <Skill
                  url="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                  width={160}
                  alt="react-native"
                />
              </div>
            </div>
            <div className="skills-section">
              <h4>Back-end</h4>
              <div className="skill-set">
                <Skill
                  url="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
                  width={109}
                  alt="nodejs"
                />
                <Skill
                  url="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"
                  width={111}
                  alt="expressjs"
                />
                <Skill
                  url="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
                  width={119}
                  alt="mongodb"
                />
                <Skill
                  url="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"
                  width={106}
                  alt="docker"
                />
                <Skill
                  url="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"
                  width={107}
                  alt="heroku"
                />
                <Skill
                  url="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"
                  width={108}
                  alt="netlify"
                />
                <Skill
                  url="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"
                  width={105}
                  alt="vercel"
                />
              </div>
            </div>
            <div className="skills-section">
              <h4>Dev & Design Tools</h4>
              <div className="skill-set">
                <Skill
                  url="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"
                  width={175}
                  alt="vscode"
                />
                <Skill
                  url="https://img.shields.io/badge/Xcode-007ACC?style=for-the-badge&logo=Xcode&logoColor=white"
                  width={100}
                  alt="xcode"
                />
                <Skill
                  url="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"
                  width={78}
                  alt="git"
                />
                <Skill
                  url="https://img.shields.io/badge/travis_CI-3EAAAF?style=for-the-badge&logo=travisci&logoColor=white"
                  width={112}
                  alt="travis-ci"
                />
                <Skill
                  url="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white"
                  width={105}
                  alt="jenkins"
                />
                <Skill
                  url="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white"
                  width={83}
                  alt="jira"
                />
                <Skill
                  url="https://img.shields.io/badge/Miro-050038?style=for-the-badge&logo=Miro&logoColor=white"
                  width={88}
                  alt="miro"
                />
                <Skill
                  url="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"
                  width={98}
                  alt="figma"
                />
              </div>
            </div>
          </div>
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

        h4 {
          color: #f5f5f5;
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .skill {
          border: 2px solid #000;
        }

        .skills-section {
          margin-bottom: 2rem;
        }

        .skill-set {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  );
}
