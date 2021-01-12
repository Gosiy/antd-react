import {Component} from "react";
import "./Index.less"

interface IndexState {
    test: string
}

export class Index extends Component<any, IndexState>{

    constructor(props: any) {
        super(props);
        console.log(props.match);
        this.state = {
            test: "测试"
        }
    }

    render() {
        const {test} = this.state;
        return (
            <div className="bordered">{test}</div>
        );
    }

}