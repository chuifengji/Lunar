export default function Footer() {
  return (
    <div>
      <div className="footer_container">
        <a href="http://www.beian.miit.gov.cn" target="_blank">
          皖ICP备19006064号-3
        </a>
        <a href="https://github.com/chuifengji/Lunar" target="_blank">
          Powered By Lunar
        </a>
      </div>
      <style jsx>{`
        .footer_container {
          width: 100vw;
          text-align: center;
          margin: auto;
          margin-bottom: 20px;
          margin-top: 20px;
          font-size:16px;
          font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
        }
        a {
          border-bottom-width: 2px;
          border-color: rgb(11, 122, 122);
          border-bottom-style: solid;
          color: inherit;
          text-decoration: none;
          margin-right: 20px;
        }
      `}</style>
    </div>
  );
}
