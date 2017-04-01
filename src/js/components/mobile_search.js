import React from "react";
import { Input, Icon } from 'antd';
export default class MobileSearch extends React.Component{
    constructor(){
        super();
        this.state = {
            current : "active"
        }
    }
    render(){
        return (
            <div>
                <div className="search">
                    <Input placeholder="搜索歌曲、歌单、专辑" prefix={<Icon type="search" />}/>
                </div>
                <div className="hot-search">
                    <h3>热门搜索</h3>
                    <button className = {this.state.current}>古巨基</button>
                    <button>动物世界 薛之谦</button>
                    <button>漂洋过海来看你</button>
                    <button>我是歌手第五季</button>
                    <button>路太远 张镐哲</button>
                    <button>释放激情 7妹</button>
                    <button>当爱已成往事</button>
                    <button>我想我是海</button>
                    <button>骄傲的少年</button>
                    <button>逃</button>
                </div>
            </div>
        );
    }
}