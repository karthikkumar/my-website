import Link from "next/link";

export default function NavBar() {
  return (
    <div id="navBar">
      <div id="goHome">home</div>
      <div id="navItems">
        <span>
          <Link href="/profile">
            <a className="navItem">profile</a>
          </Link>
        </span>
        <span>
          <Link href="/work">
            <a className="navItem">work</a>
          </Link>
        </span>
        <span>
          <Link href="/blog">
            <a className="navItem">blog</a>
          </Link>
        </span>
      </div>

      <style jsx>{`
        #navBar {
          height: 100px;
          width: 90%;
          border-bottom: 2px solid #2c2c2c;
          color: #f5f5f5;
          font-size: 1.5rem;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
          padding: 0 2rem;
        }

        #navItems {
          display: flex;
          gap: 3rem;
        }

        .navItem {
          text-decoration: none;
          color: #f5f5f5;
        }
      `}</style>
    </div>
  );
}