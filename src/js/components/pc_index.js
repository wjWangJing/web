import React from "react";
import PCHeader from "./pc_header";
import PCNewSing from "./pc_new_sing";
import PCHotSing from "./pc_hot_sing";
import PCFooter from "./pc_footer";
import "../../css/pc_style.css";
export default class PCIndex extends React.Component{
    render (){
        return (
            <div className="pc_index">
                <PCHeader />
                <PCNewSing />
                <PCHotSing />
                <PCFooter />
            </div>
        )
    }
}