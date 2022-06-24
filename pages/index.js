import Image from "next/image";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
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
            <p>
              As a perpetual learner, my career has taken me from being an iOS
              developer to frontend developer to full-stack developer and
              eventually becoming a product engineer
            </p>
          </div>
        </div>

        <style jsx>{`
          #content-wrapper {
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }

          #content {
            width: 100%;
            flex: 1;
            display: flex;
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
        `}</style>
      </div>
    </Layout>
  );
}
