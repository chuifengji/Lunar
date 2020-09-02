import Head from "next/head";
import Nav from "../components/Nav";
import Photo from "../components/Photo";
import ProgramList from "../components/ProgramList";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <Head>
        <title>EthanLv's blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta
          name="description"
          content="EthanLv的个人博客，技术分享，随想记录。"
        />
        <meta
          name="keywords"
          content="EthanLv,EthanLv的个人博客,EthanLv的博客,博客,EthanLv的个人空间,Ethan的博客,Ethan,前端,开发,全栈,技术,编程，开发者"
        />
        <meta name="renderer" content="webkit" />
        <script dangerouslySetInnerHTML={{
          __html: `var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?56dad27dfbf125ed6a436190bc6bdb1c";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();`}} />
      </Head>
      <main className="main_container">
        <div className="nav_and_photo_container">
          <Photo></Photo>
          <Nav></Nav>
        </div>

        <div className="program_container">
          <div className="post_title">posts</div>
          <ProgramList></ProgramList>
        </div>

        <Footer></Footer>
      </main>
      <style jsx>{`
        .main_container {
          display: flex;
          flex-direction: column;
          width: 100vw;
          overflow-x: hidden;
        }
        .nav_and_photo_container {
          display: flex;
          flex-direction: column;
          width: 100vw;
        }
        .program_container {
          width: 100vw;
          font-family: "Noto Serif SC", Lusitana, serif;
          margin-top: 30px;
          color: #212121;
        }
        .post_title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 15px;
          text-align: center;
          color: #9e9e9e;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
            Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
        }
        @media screen and (max-width: 1025px) {
          .post_title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 10px;
            color: #9e9e9e;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
              Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
          }
          .main_container {
            display: flex;
            flex-direction: column;
            width: 100vw;
          }
          .nav_and_photo_container {
            display: flex;
            flex-direction: column;
            width: 100vw;
          }
          .program_container {
            width: 100vw;
            font-family: "Noto Serif SC", Lusitana, serif;
            margin-top: 8px;
            color: #212121;
          }
        }
      `}</style>
    </div>
  );
}
