import Head from "next/head";
import Nav from "../components/Nav";
import Photo from "../components/Photo";
import About from "../components/About";
import Footer from "../components/Footer";
import Relation from "../components/Relation"
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
          content="EthanLv的自我介绍,关于EthanLv,EthanLv"
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
          <Relation></Relation>
          <Nav></Nav>
        </div>
        <div className="about_container">
          <About></About>
        </div>
        <Footer></Footer>
      </main>
      <style jsx>{`
        .main_container {
          display: flex;
          flex-direction: column;
          width: 100vw;
          overflow-x: hidden;
          align-items: center;
          height: 100vh;
        }
        .nav_and_photo_container {
          display: flex;
          flex-direction: column;
          width: 100vw;
        }
        .about_container {
          width: 70vw;
          font-size: 17px;
          margin-top: 30px;
          padding-left: 2rem;
          padding-right: 2rem;
          color: #212121;
          font-family: "Noto Serif SC", Lusitana, serif;
          position: relative;
        }
        @media screen and (max-width: 1025px) {
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
          }
          .about_container {
            width: 92vw;
            margin-top: 110px;
            font-size: 14px;
            padding-left: 2rem;
            padding-right: 2rem;
            color: #212121;
            font-family: "Noto Serif SC", Lusitana, serif;
            margin: auto;
          }
        }
      `}</style>
    </div>
  );
}
