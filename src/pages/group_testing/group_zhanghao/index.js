import React, { Component } from 'react';
import Aisai from '../../../components/Aisaihead'
import zhao from './index.css'
import Upline from '../../../components/group_test/upline'
import Saying from '../../../components/group_test/saying'
import Nice from '../../../components/group_test/content_nice'
import  Qing from '../../../components/group_test/qinggan'
class Zhao extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className={zhao.wrapper}>
                <div>
                   <Aisai/> 
                </div>
                
                <div className={zhao.content}>
                    <div>
                        <h3>上线情况</h3>
                        <Upline/>
                    </div>
                    <div>
                        <h3>言论情况</h3>
                        <Saying/>
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

export default Zhao;