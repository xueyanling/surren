import React, { Component } from 'react';
import MonSearch from '../../components/monitor/mon_search'
import styles from './index.css'
class Monitoring extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className={styles.bigbox}>
                <MonSearch></MonSearch>
                <div className={styles.conbox}>
                    <div className={styles.headbox}>
                        <h3>
                        <p>
                            <span  className={styles.active}>
                                信息
                            </span>
                            <span >
                                账号
                            </span>
                            <span>
                                群组
                            </span>
                        </p>
                    </h3>
                    <div className={styles.title}>
                        <div><span></span><span>埃塞俄比亚</span></div>
                        <div>
                            <span>已关注</span>
                            <span>分析</span>
                            <span>关联</span>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Monitoring;