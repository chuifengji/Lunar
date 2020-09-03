import Router from "next/router";
export default function Nav() {
  return (
    <div className="main_container">
      <div className="item_container" onClick={() => Router.push("/")}>
        <text>技术</text>
        <text className="item_en_font">PROGRAM</text>
      </div>
      <div className="item_container" onClick={() => Router.push("/thoughts")}>
        <text>随想</text>
        <text className="item_en_font">THOUGTHS</text>
      </div>
      <div className="item_container" onClick={() => Router.push("/about")}>
        <text>关于我</text>
        <text className="item_en_font">ABOUT ME</text>
      </div>
      <style jsx>{`
        .main_container {
          font-family: "Noto Serif SC", Lusitana, serif;
          display: flex;
          flex-direction: row;
          text-align: center;
          font-size: 1.3rem;
          justify-content: center;
        }
        .item_container {
          cursor: pointer;
          text-align: center;
          display: flex;
          flex-direction: column;
          padding: 25px;
          color: #757575;
        }
        .item_container:hover {
          color: #212121;
        }
        .item_en_font {
        }
        @media screen and (max-width: 1025px) {
          .main_container {
            display: flex;
            flex-direction: row;
            text-align: center;
            font-size: 1.1rem;
            justify-content: center;
          }
          .item_container {
            cursor: pointer;
            text-align: center;
            display: flex;
            flex-direction: column;
            padding: 12px;
            color: #757575;
          }
        }
      `}</style>
    </div>
  );
}
