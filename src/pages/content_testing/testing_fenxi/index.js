import React, { Component } from 'react';
import fenxi from './index.css'
import { Button ,Icon} from 'antd';
import Emotione from '../../../components/emotion/one'
import Emotiontwo from '../../../components/emotion/two'
import Emotionthree from '../../../components/emotion/three'
import Qushi from '../../../components/qushi'
import Point from '../../../components/viewpoint'
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
                            <b>情绪增量</b>
                            <Button>Reload</Button>
                        </div>
                        <div className={fenxi.top_canve}>
                            <div className='canve1'>
                                <Emotione/>
                                <p>一般 <Icon type="logout" className={fenxi.icon}/></p>
                            </div>
                            <div className='canve2'>
                                <Emotiontwo/>
                                <p>正面 <Icon type="logout" /></p>
                            </div>
                            <div className='canve2'>
                                <Emotionthree/>
                                <p>负面 <Icon type="logout" /></p>
                            </div>
                        </div>
                    </div>
                    <div className={fenxi.top_right}>
                        <div className={fenxi.top_txt}>
                            <b>情绪增量</b>
                            <span>近一周观点趋势...</span>
                        </div>
                        <div className={fenxi.zhu}>
                            <div>
                                <Qushi/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={fenxi.bottom}>
                    <p className={fenxi.point}>
                        <b>主要观点</b>
                        <div className={fenxi.pointTabs}>
                            <span ref='tab1' className={fenxi.current} onClick={()=>this.change()}>Telegram</span>
                            <span ref='tab2' onClick={()=>this.changes()}>WhatsApp</span>
                        </div>
                    </p>
                    <Point/>
                    <Point/>
                    <Point/>
                </div>
            </div>
        );
    }
    change(){
        this.refs.tab1.classList.add(fenxi.current)
        this.refs.tab2.classList.remove(fenxi.current)
    }
    changes(){
        this.refs.tab1.classList.remove(fenxi.current)
        this.refs.tab2.classList.add(fenxi.current)
    }
}

export default Fenxi;