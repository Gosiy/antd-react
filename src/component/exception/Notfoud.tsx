import  {Component} from "react";
import {Descriptions} from "antd";

export class Notfoud extends Component<any, any>{

    constructor(props: any) {
        super(props);
        console.log(props.match);
    }

    render(){
        return(
            <div>
                <Descriptions>
                    <Descriptions.Item label="">404</Descriptions.Item>
                </Descriptions>
            </div>
        );
    }
}