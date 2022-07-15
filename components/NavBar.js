import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <div id="navBar">
        <div id="home">
          <Link href="/">
            <Image src="/images/home.png" width={45} height={45} alt="home" />
          </Link>
        </div>
        <div id="navItems">
          <Link href="/profile">
            <a className="navItem">profile</a>
          </Link>
          <Link href="/work">
            <a className="navItem">work</a>
          </Link>
          <Link href="/blog">
            <a className="navItem">blog</a>
          </Link>
        </div>
        <div id="lamp">
          <Image src="/images/lamp.png" width={35} height={68} alt="lamp" />
        </div>
      </div>
      <style jsx>{`
        #navBar {
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

        #navItems {
          display: flex;
          gap: 3rem;
        }

        .navItem {
          text-decoration: none;
          color: #f5f5f5;
        }

        #home {
          position: relative;
          top: 8px;
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
