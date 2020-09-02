import Head from "next/head";
import React, { useState } from "react";
import marked from "marked";
import hljs from "highlight.js";
import axios from "axios";
hljs.configure({
  tabReplace: "  ",
  classPrefix: "hljs-",
  languages: [
    "CSS",
    "HTML, XML",
    "JavaScript",
    "PHP",
    "Python",
    "Stylus",
    "TypeScript",
    "Markdown",
  ],
});
marked.setOptions({
  highlight: (code) => hljs.highlightAuto(code).value,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
});

export default function Post() {
  const [contentValue, setContent] = useState("");
  const [timeValue, setTime] = useState("");
  const [titleValue, setTitle] = useState("");
  const [typeValue, setType] = useState("");
  const [secretValue, setSecret] = useState("");
  const [id, setId] = useState("");
  let postArticle = function () {
    let valueMarkdown = contentValue;
    let valueHtml = marked(contentValue);
    axios({
      method: "post",
      url: "https://www.ethanlv.cn/api/addArticle",
      data: {
        timeValue,
        typeValue,
        titleValue,
        secretValue,
        valueMarkdown,
        valueHtml,
      },
    });
  };
  const getList = async () => {
    const result = await axios("https://www.ethanlv.cn/api/getListAll");
    console.log(result)
  };
  let editArticle = function () {
    let valueMarkdown = contentValue;
    let valueHtml = marked(contentValue);
    axios({
      method: "post",
      url: "http://localhost:3001/editArticle",
      data: {
        id,
        timeValue,
        typeValue,
        titleValue,
        secretValue,
        valueMarkdown,
        valueHtml,
      },
    });
  };
  let contentChange = function (e) {
    setContent(e.target.value);
  };
  let timeChange = function (e) {
    setTime(e.target.value);
  };
  let typeChange = function (e) {
    setType(e.target.value);
  };
  let titleChange = function (e) {
    setTitle(e.target.value);
  };
  let secretChange = function (e) {
    setSecret(e.target.value);
  };
  let idChange = function (e) {
    setId(e.target.value);
  };
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
        <meta name="renderer" content="webkit" />
      </Head>
      <main>
        <div className="container">


          <div className="previewContainer">
            <h1>{titleValue}</h1>
            <time>{timeValue}</time>
            <div dangerouslySetInnerHTML={{ __html: marked(contentValue) }} />
          </div>
        </div>
      </main>
      <style jsx global>{`
        .container {
          position: relative;
          width: 100vw;
          height: 100%;
          display: flex;
          flex-direction: row;
        }
        .editContainer {
          width: 600px;
          height: 100%;
          position: relative;
          padding: 30px;
        }
        .textAreaBox {
          width: 500px;
          height: 400px;
        }
        .button_util {
          width: 80px;
          height: 30px;
        }
        .previewContainer {
          flex: 1;
          height: 100%;
        }
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
            Arial, "PingFang SC", "Hiragino Sans GB", STHeiti, "Microsoft YaHei",
            "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC",
            "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC",
            "Noto Sans CJK TC", "WenQuanYi Micro Hei", SimSun, sans-serif;
        }
        p {
          margin-top: 1rem;
          margin-bottom: 1rem;
          padding-left: 1rem;
          padding-right: 1rem;
          font-weight: 400;
          color: #23394d;
          font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue",
            Arial, "PingFang SC", "Hiragino Sans GB", STHeiti, "Microsoft YaHei",
            "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC",
            "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC",
            "Noto Sans CJK TC", "WenQuanYi Micro Hei", SimSun, sans-serif;
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
          margin: 60px 2px 0 0;
        }
        a {
          border-bottom-width: 2px;
          border-color: #9e9e9e;
          border-bottom-style: solid;
          color: inherit;
          text-decoration: none;
        }
        blockquote {
          border-left-width: 4px;
          border-left-style: solid;
          border-left-color: #eee;
          color: #9e9e9e;
          margin: 0;
          padding: 1rem;
          background-color: #eeeeee;
          border-color: #9e9e9e;
          font-style: italic;
        }
      `}</style>
    </div>
  );
}





