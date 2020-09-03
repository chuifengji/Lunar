export default function Footer() {
  return (
    <div>
      <div className="footer_container">
        <a href="http://www.beian.miit.gov.cn" target="_blank">
          皖ICP备19006064号-3
        </a>
        <a href="https://github.com/chuifengji" target="_blank">
          Github
        </a>
      </div>
      <style jsx>{`
        .footer_container {
          width: 100vw;
          text-align: center;
          margin: auto;
          margin-bottom: 20px;
          margin-top: 20px;
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
