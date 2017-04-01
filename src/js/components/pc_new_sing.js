import React from "react";
import { Carousel,Tabs,Button } from 'antd';
const TabPane = Tabs.TabPane;
const operations = <Button>全部 ></Button>;
export default class PCNewSing extends React.Component{
    render (){
        const style={
            background:"url(\"./src/images/bg_index_new.jpg\") no-repeat center center"
        };
        return (
            <div className = "new-sing" style={style}>
                <div className="new-title">
                    <h1>新歌首发</h1>
                    <i className="new-line new-line-left"></i>
                    <i className="new-line new-line-right"></i>
                </div>
                <Tabs  tabBarExtraContent={operations}>
                    <TabPane tab="内地" key="1">
                        <Carousel>
                            <div>
                                <div className="pic-box">
                                    <img src="./src/images/pic1.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic2.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic3.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic4.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                            </div>
                            <div>
                                <div className="pic-box">
                                    <img src="./src/images/pic1.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic2.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic3.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic4.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                            </div>
                            <div>
                                <div className="pic-box">
                                    <img src="./src/images/pic1.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic2.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic3.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic4.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                            </div>
                            <div>
                                <div className="pic-box">
                                    <img src="./src/images/pic1.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic2.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic3.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic4.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                            </div>
                        </Carousel>
                    </TabPane>
                    <TabPane tab="港台" key="2">
                        <Carousel>
                            <div>
                                <div className="pic-box">
                                    <img src="./src/images/pic1.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic2.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic3.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic4.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                            </div>
                            <div>
                                <div className="pic-box">
                                    <img src="./src/images/pic1.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic2.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic3.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic4.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                            </div>
                            <div>
                                <div className="pic-box">
                                    <img src="./src/images/pic1.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic2.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic3.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic4.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                            </div>
                            <div>
                                <div className="pic-box">
                                    <img src="./src/images/pic1.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic2.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic3.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic4.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                            </div>
                        </Carousel>
                    </TabPane>
                    <TabPane tab="欧美" key="3">
                        <Carousel>
                            <div>
                                <div className="pic-box">
                                    <img src="./src/images/pic1.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic2.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic3.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic4.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                            </div>
                            <div>
                                <div className="pic-box">
                                    <img src="./src/images/pic1.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic2.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic3.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic4.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                            </div>
                            <div>
                                <div className="pic-box">
                                    <img src="./src/images/pic1.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic2.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic3.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic4.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                            </div>
                            <div>
                                <div className="pic-box">
                                    <img src="./src/images/pic1.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic2.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic3.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic4.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                            </div>
                        </Carousel>
                    </TabPane>
                    <TabPane tab="韩国" key="4">
                        <Carousel>
                            <div>
                                <div className="pic-box">
                                    <img src="./src/images/pic1.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic2.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic3.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic4.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                            </div>
                            <div>
                                <div className="pic-box">
                                    <img src="./src/images/pic1.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic2.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic3.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic4.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                            </div>
                            <div>
                                <div className="pic-box">
                                    <img src="./src/images/pic1.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic2.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic3.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic4.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                            </div>
                            <div>
                                <div className="pic-box">
                                    <img src="./src/images/pic1.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic2.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic3.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic4.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                            </div>
                        </Carousel>
                    </TabPane>
                    <TabPane tab="日本" key="5">
                        <Carousel>
                            <div>
                                <div className="pic-box">
                                    <img src="./src/images/pic1.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic2.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic3.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic4.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                            </div>
                            <div>
                                <div className="pic-box">
                                    <img src="./src/images/pic1.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic2.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic3.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic4.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                            </div>
                            <div>
                                <div className="pic-box">
                                    <img src="./src/images/pic1.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic2.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic3.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic4.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                            </div>
                            <div>
                                <div className="pic-box">
                                    <img src="./src/images/pic1.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic2.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic3.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                                <div className="pic-box">
                                    <img src="./src/images/pic4.jpg" alt=""/>
                                    <h4>人海</h4>
                                    <p>海明威</p>
                                </div>
                            </div>
                        </Carousel>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}