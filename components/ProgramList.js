import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TechList() {
  const [data, setData] = useState({ hits: [] });
  const getList = async () => {
    const result = await axios("https://www.ethanlv.cn/api/getList");
    setData({ hits: result.data.typeOneList });
  };
  useEffect(() => {
    getList();
  }, []);
  const PostLink = (props) => (
    <Link as={`/article/${props.id}`} href={`/article?id=${props.id}`}>
      <div className="list_item">
        <div className="font_time">{props.time}</div>
        <div className="font_text">{props.title}</div>
        <style jsx>{`
          .font_text:hover {
            color: #757575;
          }
          @media (min-width: 300px) {
            .list_item {
              display: flex;
              flex-direction: row;
              text-align: left;
              margin-left: 10vw;
              cursor: pointer;
              height: 26px;
              line-height: 26px;
            }
            .font_text {
              font-weight: 600;
              color: #212121;
              font-size: 16px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              width: 230px;
            }
            .font_time {
              color: #757575;
              margin-right: 15px;
              font-size: 15px;
            }
          }
          @media (min-width: 640px) {
            .list_item {
              display: flex;
              flex-direction: row;
              text-align: left;
              margin-left: 25vw;
              cursor: pointer;
              width: 80vw;
              height: 37px;
              line-height: 37px;
            }
            .font_text {
              font-weight: 600;
              color: #212121;
              font-size: 17px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              width: 310px;
            }
            .font_time {
              color: #757575;
              margin-right: 15px;
              font-size: 16px;
            }
          }
          @media (min-width: 1024px) {
            .list_item {
              display: flex;
              flex-direction: row;
              text-align: left;
              margin-left: 28vw;
              cursor: pointer;
              width: 80vw;
              height: 37px;
              line-height: 37px;
            }
            .font_text {
              font-weight: 600;
              color: #212121;
              font-size: 17px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              width: 370px;
            }
            .font_time {
              color: #757575;
              margin-right: 15px;
              font-size: 16px;
            }
          }
          @media (min-width: 1280px) {
            .list_item {
              display: flex;
              flex-direction: row;
              text-align: left;
              cursor: pointer;
              width: 80vw;
              height: 37px;
              line-height: 37px;
            }
            .font_text {
              font-weight: 600;
              color: #212121;
              font-size: 17px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              width: 370px;
            }
            .font_time {
              color: #757575;
              margin-right: 15px;
              font-size: 16px;
            }
          }
        `}</style>
      </div>
    </Link>
  );
  return (
    <div>
      {data.hits.map((item) => (
        <div key={item.id}>
          <PostLink id={item.id} title={item.title} time={item.time}></PostLink>
        </div>
      ))}
    </div>
  );
}
