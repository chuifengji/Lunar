import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TechList() {
  const [data, setData] = useState({ hits: [] });
  const getList = async () => {
    const result = await axios("https://www.ethanlv.cn/api/getListAll");
    setData({ hits: result.data.ArticleList });
  };
  useEffect(() => {
    getList();
  }, []);
  const PostLink = (props) => (
    <div className="list_container">
      <div className="list_item">
        <div>{props.id}</div>
        <div className="font_text">{props.title}</div>
        <style jsx>{`
          .font_text:hover {
            color: #757575;
          }
          .list_container {
            width: 220px;
            height: auto;
            overflow-x: hidden;
            font-size: 14px;
          }
          .list_item {
            display: flex;
            flex-direction: row;
            text-align: left;
            width: 220px;
            padding: 10px;
            cursor: pointer;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 14px;
          }
          .font_text {
            font-weight: 600;
            color: #212121;
            font-size: 13px;
          }
        `}</style>
      </div>
    </div>
  );
  return (
    <div>
      {data.hits.map((item) => (
        <div key={item.id}>
          <PostLink id={item.id} title={item.title}></PostLink>
        </div>
      ))}
    </div>
  );
}
