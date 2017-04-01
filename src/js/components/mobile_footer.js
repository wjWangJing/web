import React from "react";
export default class MobileFooter extends React.Component{
    render(){
        return (
            <footer>
                <div className="link-web">查看电脑版网页</div>
                <div className="footer-logo">QQ音乐</div>
                <p>Copyright © 1998 - <span>2016</span> Tencent. All Rights Reserved.</p>
                <p>联系电话：0755-86013388 QQ群：55209235</p>
            </footer>
        )
    }
}