import Router from "next/router";
export default function ArticleHeader() {
  return (
    <div>
      <div className="header_container">
        <div className="title_blog" onClick={() => Router.push("/")}>
          EthanLv's Blog
        </div>
        <div className="header_item" onClick={() => Router.push("/")}>
          技术
        </div>
        <div className="header_item" onClick={() => Router.push("/thoughts")}>
          随想
        </div>
        <div className="header_item" onClick={() => Router.push("/about")}>
          关于我
        </div>
      </div>
      <style jsx>{`
        .header_container {
          width: 100vw;
          height: 50px;
          position: fixed;
          top: 0;
          font-family: "Noto Serif SC", Lusitana, serif;
          line-height: 50px;
          background-color: #4c4c4c;
          display: flex;
          flex-direction: row;
          text-align: center;
          color: #fff;
        }
        .title_blog {
          width: 120px;
          height: 50px;
          cursor: pointer;
        }
        .header_item {
          width: 80px;
          height: 50px;
          line-height: 50px;
          cursor: pointer;
        }
        .header_item:hover {
          background-color: #919191;
        }
      `}</style>
    </div>
  );
}
