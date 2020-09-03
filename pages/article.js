import axios from "axios";
import Head from "next/head";
import ArticleHeader from "../components/ArticleHeader";
import Footer from "../components/Footer";
import Gitalk from "gitalk";
import PostDir from "blog-directories";
import React from "react";
export default class article extends React.Component {
  static async getInitialProps(context) {
    const { id } = context.query;
    let result = await axios(`https://www.ethanlv.cn/api/getArticle?id=${id}`);
    return { result: result.data };
  }
  componentDidMount() {
    const gitalk = new Gitalk({
      clientID: "4c22039da79b3430e64b",
      clientSecret: "9a23a8225dc9f283717e7e8d25d71470161880d7",
      repo: "blog-comments", // The repository of store comments,
      owner: "chuifengji",
      admin: ["chuifengji"],
      id: location.href, // Ensure uniqueness and length less than 50
      distractionFreeMode: false, // Facebook-like distraction free mode
    });
    gitalk.render("comments");
    const postDir = new PostDir({
      postContainer: "article_content",
      hierarchy: ["h2", "h3"],
      directoriesRoot: "directories_box",
    });
    postDir.render();
  }

  render() {
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

        <ArticleHeader></ArticleHeader>
        <div className="article_source">
          <h1>{this.props.result.title}</h1>
          <time>{this.props.result.time}</time>
          <div
            id="article_content"
            dangerouslySetInnerHTML={{ __html: this.props.result.valueHtml }}
          />
        </div>
        <div id="directories_box" className="directories_box"></div>
        <style jsx>{`
          time {
            color: #9e9e9e;
            font-size: 15px;
            padding-left: 4px;
          }
          #comments {
            width: 80%;
            margin: auto;
          }
          @media (min-width: 300px) {
            .article_source {
              max-width: 640px;
              padding-left: 1rem;
              padding-right: 1rem;
              box-sizing: content-box;
              color: #424242;
              font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
              overflow-x: hidden;
              margin-left: auto;
              font-size: 16px;
              margin-right: auto;
            }
            .directories_box{
              display:none;
            }
          }
          @media (min-width: 640px) {
            .article_source {
              max-width: 640px;
              padding-left: 2rem;
              padding-right: 2rem;
              box-sizing: content-box;
              color: #424242;
              font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
              overflow-x: hidden;
              margin-left: auto;
              font-size: 16px;
              margin-right: auto;
            }
            .directories_box{
              display:none;
            }
          }
          @media (min-width: 768px) {
            .article_source {
              max-width: 768px;
              padding-left: 2rem;
              padding-right: 2rem;
              color: #424242;
              box-sizing: content-box;
              font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
              overflow-x: hidden;
              margin-left: auto;
              font-size: 16px;
              margin-right: auto;
            }
            .directories_box{
              display:none;
            }
          }
          @media (min-width: 1024px) {
            .article_source {
              max-width: 1024px;
              padding-left: 9rem;
              padding-right: 9rem;
              color: #424242;
              font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
              overflow-x: hidden;
              margin-left: auto;
              font-size: 16px;
              box-sizing: content-box;
              margin-right: auto;
            }
            .directories_box{
              display:none;
            }
          }
          @media (min-width: 1280px) {
            .article_source {
              max-width: 1280px;
              padding-left: 23rem;
              margin-top: 30px;
              padding-right: 23rem;
              color: #424242;
              font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
              overflow-x: hidden;
              font-size: 16px;
              box-sizing: content-box;
              margin-right: auto;
              margin-left: auto;
            }
            .directories_box{
              position:fixed;
              top:110px;
              right:50px;
              font-size:16px;
              letter-spacing:2px;
              line-height:2;
            }
          }
        `}</style>
        <style jsx global>
          {`
            pre {
              background: #282a36;
              color: #f8f8f2;
              padding: 0.6em;
              margin: 0.5em 0;
              overflow: auto;
              border-radius: 0.3em;
            }
            html {
              color: #424242;
              font-size: 16px;
              line-height: 1.625;
              overflow-x: hidden;
              font-weight: 400;
              color: #23394d;
              font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue",
                Arial, "PingFang SC", "Hiragino Sans GB", STHeiti,
                "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC",
                "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC",
                "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei",
                SimSun, sans-serif;
            }
            p {
              margin-top: 1rem;
              margin-bottom: 1rem;
              padding-left: 1rem;
              padding-right: 1rem;
              font-weight: 400;
              line-height:1.6;
              letter-spacing:2px;
              color: #23394d;
              font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue",
                Arial, "PingFang SC", "Hiragino Sans GB", STHeiti,
                "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC",
                "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC",
                "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei",
                SimSun, sans-serif;
            }
            img {
              margin-left: auto;
              margin-right: auto;
              max-width: 100%;
              height: auto;
              box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12),
                0 2px 10px 0 rgba(34, 36, 38, 0.08);
            }
            table {
              width: 100%;
              border: 1px solid #ddd;
              margin: 1rem 0;
              border-collapse: collapse;
              box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.125);
              border-spacing: 0;
            }
            th {
              display: table-cell;
              vertical-align: inherit;
              font-weight: bold;
              border: 1px solid #dedede;
              padding: 0.2rem 1rem 0 1rem;
            }
            td {
              display: table-cell;
              vertical-align: inherit;
              border: 1px solid #dedede;
              padding: 0.2rem 1rem 0 1rem;
            }
            h1,
            h2,
            h3,
            h4,
            h5 {
              color: #23394d;
            }
            h1 {
              margin: 60px 10px 0 0;
            }
            h2{
              margin: 30px 5px 0 0;
            }
            h3{
              margin: 15px 3px 0 0;
            }
            a {
              border-bottom-width: 2px;
              border-color: #ebfa9f;
              border-bottom-style: solid;
              color: inherit;
              text-decoration: none;
            }
            blockquote {
              border-left-width: 4px;
              border-left-style: solid;
              border-left-color: rgb(11, 122, 122);;
              margin: 0;
              padding: .3rem;
              background-color: rgba(141, 193, 193, 0.24);
              border-radius:8px;
            }
           strong{
            color: rgb(11, 122, 122);
            background-color:rgba(141, 193, 193, 0.24);
           }
          `}
        </style>
        <Footer></Footer>
        <div id="comments"></div>
        <div id="ll"></div>
      </div>
    );
  }
}
