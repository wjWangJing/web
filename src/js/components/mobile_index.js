import React from "react";
import MobileHeader from "./mobile_header";
import MobileRecommend from "./mobile_recommend";
import MobileSearch from "./mobile_search";
import MobileRank from "./mobile_rank";
import "../../css/mobile_style.css";
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
export default class MobileIndex extends React.Component{
    render(){
        return (
            <div className="mobile_index">
                <MobileHeader />
                <Tabs defaultActiveKey="recommend">
                    <TabPane tab="推荐" key="recommend" className = "nav-list">
                        <MobileRecommend />
                    </TabPane>
                    <TabPane tab="排行榜" key="ranking" className = "nav-list">
                        <MobileRank />
                    </TabPane>
                    <TabPane tab="搜索" key="search" className = "nav-list">
                        <MobileSearch />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}