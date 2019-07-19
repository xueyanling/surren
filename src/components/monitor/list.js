import React, { Component } from 'react';
import styles from './list.css'
class list extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const {options} = this.props
        return (
            <div>
                {
                    options.map(item =>(
                        <div className={styles.box} key={item.id}>
                    <h2 style={{flex:3,paddingLeft:'20px'}}>
                        {item.name}
                    </h2>
                    <div style={{flex:5}} className={styles.rightBox}>
                    <p className={styles.txt}>
                        {item.content}
                    </p>
                    <div className={styles.rightBtn}>
                        <span>已关注</span>
                        <span>分析</span>
                        <span>关联</span>
                    </div>
                    </div>
                </div>
                    ))
                }
            </div>
        );
    }
}

export default list;