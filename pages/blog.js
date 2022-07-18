export default function Blog() {
  return (
    <>
      <div className="content">
        <div>
          <h1>my blog</h1>
        </div>
        <div className="blogs">
          <div className="post">
            <a href="#" className="title">
              How i created this website
            </a>
            <p className="date">16 July 2022</p>
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

        .blogs {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .post {
          width: 70%;
          border-bottom: 1px solid #212121;
        }

        .post > .title {
          font-size: 1.4rem;
          font-weight: 400;
          color: #f5f5f5;
        }

        .post > .date {
          color: #767676;
        }
      `}</style>
    </>
  );
}
