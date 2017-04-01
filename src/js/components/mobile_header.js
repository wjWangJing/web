import React from "react";
export default class MobileHeader extends React.Component{
    constructor(){
        super();
        this.state={
            current : "recommend"
        }
    }
    render(){
        return (
            <header>
                <div className="top-nav">
                    <span>QQ音乐</span>
                    <button>下载APP</button>
                </div>
            </header>
        )
    }
}