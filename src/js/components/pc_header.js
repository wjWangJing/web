import React from "react";
import {Input,Button,Menu} from 'antd';
const Search = Input.Search;
export default class PCHeader extends React.Component{
    constructor (){
        super();
        this.state = {
            currentNav : "home",
            currentTop : "musics"
        }
    };
    render (){
        return (
            <header>
                <Menu selectedKeys={[this.state.currentTop]} mode="horizontal" className="header-top-nav">
                    <Menu.Item key="logo" className = "logo">
                        QQ音乐
                    </Menu.Item>
                    <Menu.Item key="musics">
                        音乐馆
                    </Menu.Item>
                    <Menu.Item key="myMusic">
                        我的音乐
                    </Menu.Item>
                    <Menu.Item key="download">
                        下载客户端
                    </Menu.Item>
                    <Menu.Item key="VIP">
                        VIP
                    </Menu.Item>
                </Menu>
                <div className="search">
                    <Search placeholder="请输入您要查找的内容"/>
                    <Button>登录</Button>
                </div>
                <Menu selectedKeys={[this.state.current]} mode="horizontal" className="header-bottom-nav">
                    <Menu.Item key="home">
                        首页
                    </Menu.Item>
                    <Menu.Item key="singer">
                        歌手
                    </Menu.Item>
                    <Menu.Item key="album">
                        专辑
                    </Menu.Item>
                    <Menu.Item key="ranking">
                        排行榜
                    </Menu.Item>
                    <Menu.Item key="songList">
                        分类歌单
                    </Menu.Item>
                    <Menu.Item key="MV">
                        MV
                    </Menu.Item>
                </Menu>
            </header>
        )
    }
}