import React from "react";

/*
 * 创建网站头部组件
 * 需要注意的是：如果模块只有一个输出值，就使用`export default`，如果模块有多个输出值，就不使用`export default`，不要`export default`与普通的`export`同时使用。
 * */
export default class ComponentHeader extends React.Component{
    render (){
        return (
            <header>
                <h1>This is header</h1>
            </header>
        )
    }
}
