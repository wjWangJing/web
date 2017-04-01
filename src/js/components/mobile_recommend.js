import React from "react";
import { Carousel,Card } from 'antd';
import MobileFooter from "./mobile_footer";
export default class MobileRecommend extends React.Component{
    render(){
        return (
            <div>
                {/*轮播图*/}
                <Carousel autoplay className = "carousel">
                    <div className="carousel-img"><img src="./src/images/mpic2.jpg" alt=""/></div>
                    <div className="carousel-img"><img src="./src/images/mpic3.jpg" alt=""/></div>
                    <div className="carousel-img"><img src="./src/images/mpic4.jpg" alt=""/></div>
                </Carousel>
                {/*电台*/}
                <div className="radio clearFix">
                    <h3>电台</h3>
                    <Card className = "radio-card radio-card-first" bodyStyle={{ padding: "0 0 10px 0" }}>
                        <div className="custom-image">
                            <img alt="happy_life" width="100%" src="./src/images/r_pic1.jpg" />
                        </div>
                        <div className="custom-card">
                            <h3>乐活电台</h3>
                        </div>
                    </Card>
                    <Card className = "radio-card" bodyStyle={{ padding: "0 0 10px 0" }}>
                        <div className="custom-image">
                            <img alt="happy_life" width="100%" src="./src/images/r_pic2.jpg" />
                        </div>
                        <div className="custom-card">
                            <h3>BMW 1系燃擎电台</h3>
                        </div>
                    </Card>
                </div>
                {/*热门歌单*/}
                <div className="radio clearFix">
                    <h3>热门歌单</h3>
                </div>
                <MobileFooter />
            </div>
        )
    }
}