import React from "react";
import ReactDOM from "react-dom";
import 'antd/dist/antd.css';
import PCIndex from "./components/pc_index";
import MobileIndex from "./components/mobile_index";
const MediaQuery = require('react-responsive');

export default class Root extends React.Component{
    render (){
        return (
            <div>
                <MediaQuery query='(min-device-width: 768px)'>
                    <PCIndex />
                </MediaQuery>
                <MediaQuery query='(max-device-width: 767px)'>
                    <MobileIndex />
                </MediaQuery>
            </div>
        )
    }
}

/*
 * 在页面中渲染所有组件
 * */
ReactDOM.render(
    <Root />,
    document.getElementById("mainContent")
);