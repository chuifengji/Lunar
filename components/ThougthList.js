import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TechList() {
  const [data, setData] = useState({ hits: [] });
  const getList = async () => {
    const result = await axios("https://www.ethanlv.cn/api/getList");
    result.data.typeTwoList.sort(function (a, b) { if (a.time > b.time) { return -1 } else { return 1; } })
    setData({ hits: result.data.typeTwoList });
  };
  useEffect(() => {
    getList();
  }, []);
  const PostLink = (props) => (
    <Link as={`/article/${props.id}`} href={`/article?id=${props.id}`}>
      <div className="list_item">
        <div className="font_text">{props.title}</div>
        <div className="font_time">{props.time}</div>
        <style jsx>{`
          .font_text:hover {
            color: #757575;
          }
          @media (min-width: 300px) {
            .list_item {
              display: flex;
              flex-direction: column;
              text-align: left;
              cursor: pointer;
              width: 90vw;
              height: 70px;
              margin-left:5vw;
              font-family: "Iowan Old Style", Palatino, Georgia, "Times New Roman", Times, serif;
            }
            .font_text {
              font-weight: 600;
              color: #212121;
              font-size: 18px;
              height:35px;
              line-height:35px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              width: 100%;
              letter-spacing:2px;            
            }
            .font_time {
              color: rgb(11, 122, 122);
              margin-right: 15px;
              font-size: 15px;
              height:25px;
              line-height:25px;
              font-family: "Iowan Old Style", Palatino, Georgia, "Times New Roman", Times, serif;
            }
          }
          @media (min-width: 640px) {
            .list_item {
              display: flex;
              flex-direction: column;
              text-align: left;
              cursor: pointer;
              width: 75vw;
              height: 70px;
              margin-left:15vw;
              font-family: "Iowan Old Style", Palatino, Georgia, "Times New Roman", Times, serif;
            }
            .font_text {
              font-weight: 600;
              color: #212121;
              font-size: 20px;
              height:35px;
              line-height:35px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              width: 100%;
              letter-spacing:2px;            
            }
            .font_time {
              color: rgb(11, 122, 122);
              margin-right: 15px;
              font-size: 16px;
              height:25px;
              line-height:25px;
              font-family: "Iowan Old Style", Palatino, Georgia, "Times New Roman", Times, serif;
            }
          }
          @media (min-width: 1024px) {
            .list_item {
              display: flex;
              flex-direction: column;
              text-align: left;
              cursor: pointer;
              width: 63vw;
              height: 70px;
              margin-left:37vw;
            }
            .font_text {
              font-weight: 600;
              color: #212121;
              font-size: 17px;
              height:35px;
              line-height:35px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              width: 370px;
            }
            .font_time {
              color: rgb(11, 122, 122);
              margin-right: 15px;
              font-size: 16px;
              height:25px;
              line-height:25px;
            }
          }
          @media (min-width: 1280px) {
            .list_item {
              display: flex;
              flex-direction: column;
              text-align: left;
              cursor: pointer;
              width: 63vw;
              height: 70px;
              margin-left:33vw;
              font-family: "Iowan Old Style", Palatino, Georgia, "Times New Roman", Times, serif;
            }
            .font_text {
              font-weight: 600;
              color: #212121;
              font-size: 20px;
              height:35px;
              line-height:35px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              width: 100%;
              letter-spacing:2px;            
            }
            .font_time {
              color: rgb(11, 122, 122);
              margin-right: 15px;
              font-size: 16px;
              height:25px;
              line-height:25px;
              font-family: "Iowan Old Style", Palatino, Georgia, "Times New Roman", Times, serif;
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
