import React, { Component } from 'react';
import charact from './index.css'
import Aisai from '../../../components/Aisaihead'
import Nice from '../../../components/group_test/content_nice'
import  Qing from '../../../components/group_test/qinggan'
import  Zhutu from '../../../components/group_test/zhu_tu'
import  Megs from '../../../components/group_test/megs'
class Charact extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className={charact.wrapper}>
                <div>
                   <Aisai/> 
                </div>
                <div className={charact.content}>
                    <div>
                        <h3>活跃度</h3>
                        <Zhutu/>
                    </div>
                    <div>
                        <h3>信息发布量</h3>
                        <Megs/>
                    </div>
                    <div>
                        <h3>内容偏好</h3>
                        <Nice/>
                    </div>
                    <div>
                        <h3>情感分析</h3>
                        <Qing/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Charact;