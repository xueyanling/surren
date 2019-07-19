import React, { Component } from 'react';
import List from '../../../components/monitor/list'
import styles from './index.css'
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
            <div>
                <div className={styles.headbox}>
                    <span style={{flex:3}}>群组名称</span>
                    <span style={{flex:5}}>相关描述</span>
                </div>
                <List options={this.state.list}></List>
            </div>
        );
    }
    componentDidMount(){
        axios.get('/api/qunzu').then(({data})=>{
            this.setState({
                list:data
            })
        })
    }
}

export default index;