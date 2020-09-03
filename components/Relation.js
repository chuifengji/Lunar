export default function Relation() {
    return (
        <div className="relation_container">
            <a href="https://github.com/chuifengji" target="_blank">
                <img alt="chuifengji" className="item_icon" width="20px" src="https://img.ethanlv.cn/Github.svg" />
            </a>
            <a href="https://twitter.com/LDL07954499" target="_blank">
                <img alt="LDL07954499 | Twitter" className="item_icon" width="20px" src="https://img.ethanlv.cn/twittericon.svg" />
            </a>
            <a href="#LDLwait2022" target="_blank" title="LDLwait2022">
                <img alt="shibuyayuri" className="item_icon" width="20px" src="https://img.ethanlv.cn/wechat.svg" />
            </a>
            <a href="http://wpa.qq.com/msgrd?v=3&uin=2326482598&site=qq&menu=yes" src="http://wpa.qq.com/pa?p=2::52" target="_blank" title="2584172930">
                <img alt="2584172930" className="item_icon" width="20px" src="https://img.ethanlv.cn/qq.svg" />
            </a>
            <a href="https://www.zhihu.com/people/chui-feng-ji-83" target="_blank">
                <img alt="chui-feng-ji-83" className="item_icon" width="20px" src="https://img.ethanlv.cn/zhihu.svg" />
            </a>
            <style jsx>{`
            .relation_container{
              display:flex;
              flex-direction: row;
              justify-content:center;
              align-items:center;
              height:60px;
            }
            .item_icon{
                margin:10px;
                width:20px;
                height:20px;
            }
            `}</style>
        </div>
    );
}
