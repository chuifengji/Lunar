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
      @media screen and (min-width: 300px) {
          .main_container {
            display: flex;
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
            flex-direction: row;
            text-align: center;
            font-size: 16px;
            justify-content: center;
          }
          .item_container {
            cursor: pointer;
            text-align: center;
            display: flex;
            flex-direction: column;
            padding: 9px;
            color: #757575;
          }
        }
        .item_container:hover {
          color: #212121;
        }
        @media screen and (min-width: 340px) {
          .main_container {
            display: flex;
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
            flex-direction: row;
            text-align: center;
            font-size: 18px;
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
        @media screen and (min-width: 1025px) {
          .main_container {
            display: flex;
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
            flex-direction: row;
            text-align: center;
            font-size: 20px;
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
