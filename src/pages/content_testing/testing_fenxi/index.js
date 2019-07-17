import React, { Component } from 'react';
import fenxi from './index.css'
import { Button } from 'antd';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
class Fenxi extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){

    }
    render() {
        return (
            <div className={fenxi.wrapper}>
                <div className={fenxi.top}>
                    <div className={fenxi.top_left}>
                        <div className={fenxi.top_title}>
                            <span>情绪增量</span>
                            <Button>Reload</Button>
                        </div>
                    </div>
                    <div className={fenxi.top_right}></div>
                </div>
            </div>
        );
    }
}

export default Fenxi;