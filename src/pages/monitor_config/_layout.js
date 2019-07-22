import React, { Component } from 'react';
import MonSearch from '../../components/monitor/mon_search'
import styles from './index.css'
import router from 'umi/router'
import axios from 'axios'
class Monitoring extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            ind:0
         };
    }
    render() {
        return (
            <div className={styles.bigbox}>
                <MonSearch></MonSearch>
                <div className={styles.conbox}>
                <div className={styles.headbox}>
                        <h3>
                        <p ref="pp">
                            <span  className={styles.active} onClick={this.handleMessage}>
                                信息
                            </span>
                            <span  onClick={this.handleZhanghao}>
                                账号
                            </span>
                            <span  onClick={this.handleZu}>
                                群组
                            </span>
                        </p>
                    </h3>
                   {this.props.children} 
                 </div>
                
                </div>
            </div>
        );
    }
    componentDidMount(){
        let child=[...this.refs.pp.children]
        let ind=0
        this.refs.pp.addEventListener('click',function(e){
            let target=e.target
            child[ind].classList.remove(styles.active)
            target.classList.add(styles.active)
            ind=child.indexOf(target)
        })
    }
    handleMessage=()=>{
        router.push('/monitor_config/message')
    }
    handleZhanghao=()=>{
        router.push('/monitor_config/zhanghao')
    }
    handleZu=()=>{
        router.push('/monitor_config/qunzu')
    }
}

export default Monitoring;