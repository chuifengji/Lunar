import Head from "next/head";
import React, { useState, useEffect } from "react";
import marked from "marked";
import hljs from "highlight.js";
import axios from "axios";
import { DatePicker, Space, Input, Select, Button, Layout } from 'antd';
const { TextArea } = Input;
const { Option } = Select;
const { Header, Footer, Sider, Content } = Layout;
hljs.configure({
  tabReplace: "  ",
  classPrefix: "hljs-",
  languages: [
    "Text",
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
  const [articleList, setArticleList] = useState([])
  useEffect(() => {
    getList();
  }, []);
  let postArticle = function () {
    let valueMarkdown = contentValue;
    let valueHtml = marked(contentValue);
    console.log(timeValue,
      typeValue,
      titleValue,
      secretValue,
      valueMarkdown,
      valueHtml)
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
    setArticleList(result.data.ArticleList)
  };
  let editArticle = function () {
    let valueMarkdown = contentValue;
    let valueHtml = marked(contentValue);
    console.log(
      id,
      timeValue,
      typeValue,
      titleValue,
      secretValue,
      valueMarkdown,
      valueHtml)
    axios({
      method: "post",
      url: "https://www.ethanlv.cn/api/editArticle",
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
  let contentChange = (e) => {
    setContent(e.target.value);
  };
  let timeChange = (date, dateString) => {
    setTime(dateString);
  }
  let typeChange = (value) => {
    setType(value);
  };
  let titleChange = (e) => {
    setTitle(e.target.value);
  };
  let secretChange = (e) => {
    setSecret(e.target.value);
  };
  let idChange = (value) => {
    setId(value);
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
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff' }}>
            <Space direction="horizontal">

              <Select defaultValue="选择原文标题,增加不需" style={{ width: 220 }} allowClear='true' onChange={idChange}>
                {articleList.map(item => {
                  return (<Option value={item.id}>{item.title}</Option>)
                })}
              </Select>

              <Input placeholder="输入标题" onChange={titleChange} />
              <DatePicker onChange={timeChange} />
              <Select defaultValue="文章类型" style={{ width: 120 }} onChange={typeChange}>
                <Option value="技术">技术</Option>
                <Option value="随想">随想</Option>
              </Select>
              <Input.Password placeholder="输入密钥" onChange={secretChange} />
              <Button type="primary" onClick={postArticle}>发布</Button>
              <Button type="primary" onClick={editArticle}> 修改</Button>
            </Space>
          </Header>
          <Content style={{ padding: '0 0px', marginTop: 64 }}>
            <div className="container">
              <div className="editContainer">
                <TextArea className="textAreaBox" placeholder="输入文章内容" autoSize={{ minRows: 30 }} allowClear onChange={contentChange} />
              </div>
              <div className="previewContainer">
                <h1>{titleValue}</h1>
                <time>{timeValue}</time>
                <div dangerouslySetInnerHTML={{ __html: marked(contentValue) }} />
              </div>
            </div>
          </Content>
        </Layout>
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
          width: 46%;
          height: 100%;
          position: relative;
          padding: 10px;
        }
        .textAreaBox {
          min-height: 600px;
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
              border-left-color: #553c9a;
              color: #553c9a;
              margin: 0;
              padding: .3rem;
              background-color: #edf2f7;
              border-radius:8px;
            }
           strong{
            color: #553c9a;
            background-color: #edf2f7;
           }
 
      `}</style>
    </div >
  );
}





