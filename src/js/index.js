const React = require("react");
const ReactDOM = require("react-dom");

/*
* 导入网站头部组件
* */
import ComponentHeader from "./components/header";
/*
 * 导入网站主体部分组件
 * */
import ComponentMain   from "./components/main";
/*
 * 导入网站底部组件
 * */
import ComponentFooter from "./components/footer";

/*
 * 创建入口组件
 * */
class Index  extends React.Component{
    componentWillMount (){
        console.log("loading-start")
    }
    componentDidMount (){
        console.log("loading-end")
    }
    render (){
        return (
            <div>
                <ComponentHeader />
                <ComponentMain />
                <ComponentFooter />
            </div>
        )
    }
}
/*
 * 在页面中渲染所有组件
 * */
ReactDOM.render(
    <Index />,
    document.getElementById("content")
);