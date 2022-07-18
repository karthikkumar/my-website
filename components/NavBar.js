import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

function NavItem({ name }) {
  const router = useRouter();
  const path = `/${name}`;
  const className = "nav-item" + (router.pathname === path ? " highlight" : "");
  return (
    <>
      <Link href={path}>
        <a className={className}>{name}</a>
      </Link>
      <style jsx>
        {`
          .nav-item {
            border-bottom: 2px solid transparent;
            text-decoration: none;
            color: #f5f5f5;
          }

          .highlight {
            border-bottom: 2px solid #007ced;
          }
        `}
      </style>
    </>
  );
}

export default function NavBar() {
  const router = useRouter();
  return (
    <>
      <div id="nav-bar">
        <div id="home">
          <Link href="/">
            <Image
              src={
                router.pathname === "/"
                  ? "/images/home-highlighted.png"
                  : "/images/home.png"
              }
              width={45}
              height={45}
              alt="home"
            />
          </Link>
          <span />
        </div>
        <div id="nav-items">
          <NavItem name="profile" />
          <NavItem name="work" />
          <NavItem name="blog" />
        </div>
        <div id="lamp">
          <Image src="/images/lamp.png" width={35} height={68} alt="lamp" />
        </div>
      </div>
      <style jsx>{`
        #nav-bar {
          height: 80px;
          width: 90%;
          border-bottom: 2px solid #2c2c2c;
          color: #f5f5f5;
          font-size: 1.5rem;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
          padding: 0 2rem;
          position: fixed;
          top: 0;
          max-width: 1100px;
          min-width: 900px;
          z-index: 1;
          background-color: #000;
          margin-top: 1rem;
        }

        #nav-items {
          position: relative;
          top: 2px;
          display: flex;
          gap: 3rem;
        }

        #home {
          position: relative;
          top: 7px;
          cursor: pointer;
        }

        #lamp {
          position: absolute;
          top: -30px;
          right: -18px;
        }
      `}</style>
    </>
  );
}
