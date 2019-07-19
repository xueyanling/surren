import React, { Component } from 'react';
import styles from './index.css'
import Searchist from '../../../components/monitor/searchlist'
import axios from 'axios'
class index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[]
         };
    }
    render() {
        return (
            <div className={styles.conbox}>
                    <div className={styles.headbox}>
                    <div className={styles.title}>
                        <div><span className={styles.txt}>埃塞俄比亚</span></div>
                        <div className={styles.rightBtn}>
                            <span>已关注</span>
                            <span>分析</span>
                            <span>关联</span>
                        </div>
                    </div>
                    <div className={styles.titleList}>
                        <span>
                            列表展示
                        </span>
                        <span>
                            总数：333333
                        </span>
                    </div>
                    <div>
                        <Searchist option={this.state.list}></Searchist>
                    </div>
                    </div>
                    
                </div>
        );
    }
    componentDidMount(){
        axios.get('/api/resultlist').then(({data})=>{
            // console.log(data)
            this.setState({
                list:data
            })
        })
    }
}

export default index;