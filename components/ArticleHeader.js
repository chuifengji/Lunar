import Router from "next/router";
import React, { useState, useEffect } from "react";

export default function ArticleHeader() {
  const [headerScrollDown, setHeaderScrollDown] = useState(false);
  function windowAddMouseWheel() {
    var scrollFunc = function (e) {
      e = e || window.event;
      if (e.wheelDelta) {
        if (e.wheelDelta > 0) {
          setHeaderScrollDown(false)
        }
        if (e.wheelDelta < 0) {
          setHeaderScrollDown(true)
        }
      } else if (e.detail) {
        if (e.detail > 0) {
          setHeaderScrollDown(false)
        }
        if (e.detail < 0) {
          setHeaderScrollDown(true)
        }
      }
    };
    if (document.addEventListener) {
      document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    window.onmousewheel = document.onmousewheel = scrollFunc;
  }
  useEffect(() => {
    windowAddMouseWheel();
  }, []);

  return (
    <div>
      <div className={`header_container ${headerScrollDown ? 'header_container_scrolldown' : 'header_container_scrollup'}`}>
        <div className="title_blog" onClick={() => Router.push("/")}>
          EthanLv's Blog
        </div>
        <div className="header_item" onClick={() => Router.push("/")}>
          program
        </div>
        <div className="header_item" onClick={() => Router.push("/thoughts")}>
          thought
        </div>
        <div className="header_item" onClick={() => Router.push("/about")}>
          about
        </div>
      </div>
      <style jsx>{`
        .header_container {
          width: 100vw;
          height: 60px;
          position: fixed;
          top: 0;
          font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
          line-height: 60px;
          background-color: rgba(255,255,255,0.75);
          display: flex;
          flex-direction: row;
          text-align: center;
          color: rgb(11, 122, 122);
          font-size:16px;
          backdrop-filter: blur(5px);
          border-bottom: 1px solid #e2e8f0;
          transition: transform 250ms ease;
        }
        .header_container_scrolldown{
          transform: translate3d(0, -100%, 0);
        }
        .header_container_scrollup{
          transform: none;
      }
        .title_blog {
          width: 120px;
          height: 60px;
          cursor: pointer;
          font-weight: 700;
        }
        .title_blog:hover {
          color: rgb(11, 175, 175);
        }
        .header_item {
          width: 80px;
          height: 60px;
          line-height: 60px;
          cursor: pointer;
        }
        .header_item:hover {
          color:rgb(11, 175, 175);
        }
      `}</style>
    </div>
  );
}
