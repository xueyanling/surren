import React, { Component } from 'react';
import styles from './searchlist.css'
class search extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        let {option} =this.props
        return (
            <div>
                {
                    option && option.map(item=>(
                        <div className={styles.ulbox} key={item.id}>
                            <p className={styles.contxt}>{item.title}</p>
                            <p>
                                <span>时间：{item.time}</span>
                                <span className={styles.from}>来源：{item.source}</span>
                                <span className={styles.radius}>{item.point}</span>
                            </p>
                            <p>
                                <span>
                                   {item.country}
                                </span>
                                <span style={{marginLeft:'20px'}}>
                                    {item.casesType}
                                </span>
                            </p>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default search;