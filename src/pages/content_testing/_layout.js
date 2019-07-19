import React, { Component } from 'react';
import content from './index.css'
import Aisai from '../../components/Aisaihead'
import router from 'umi/router'
class Jiance extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className={content.wrapper}>
                <Aisai/>
                <div className={content.tabs}>
                    <span ref='tab1' className={content.active} onClick={()=>this.tabone()}>监测结果</span>
                    <span ref='tab2' onClick={()=>this.tabtwo()}>监测分析</span>
                </div>
                    {this.props.children}
            </div>
        );
    }
    tabone(){
        this.refs.tab1.classList.add(content.active)
        this.refs.tab2.classList.remove(content.active)
        router.push('/content_testing/testing_result')
    }
    tabtwo(){
        this.refs.tab1.classList.remove(content.active)
        this.refs.tab2.classList.add(content.active)
        router.push('/content_testing/testing_fenxi')
    }
}

export default Jiance;