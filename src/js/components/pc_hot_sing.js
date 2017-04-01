import React from "react";
import { Carousel } from 'antd';
export default class PCHotSing extends React.Component{
    render (){
        return (
            <div className = "hot-sing">
                <div className="hot-title">
                    <h1>热门歌单</h1>
                    <i className="hot-line hot-line-left"></i>
                    <i className="hot-line hot-line-right"></i>
                </div>
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
            </div>
        )
    }
}