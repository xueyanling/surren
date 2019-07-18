import React, { Component } from 'react';
import SituationItem from '../../components/situation'
import styles from './index.css'
import MapLeft from '../../components/situation/mapLeft'
import ListRight from '../../components/situation/listRight'
import City from '../../components/situation/city'
import Column from '../../components/situation/column'
import axios from 'axios'

class Overall extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[],
            numData:[]
         };
    }
    render() {
        return (
            <div>
                <div className={styles.bigbox}>
                 <SituationItem numlist={this.state.numData}></SituationItem>
                </div>
                <div className={styles.mapbox}>
                    <div>
                        <h3>突发事件地图</h3>
                        <div>
                            <MapLeft></MapLeft>
                        </div>
                    </div>
                    <div>
                        <h3>
                            <span>实时数据</span>
                            <p>
                                <i className={styles.active} onClick={this.handleSudden}>
                                    突发事件
                                </i>
                                <i onClick={this.handleHot}>
                                    热点事件
                                </i>
                            </p>
                        </h3>
                        <ListRight options={this.state.list}></ListRight>
                        <div>      
                        </div>
                    </div>
                    <div>
                        <h3>采集量趋势</h3>
                        <City></City>
                    </div>
                    <div>
                        <h3>事件类型</h3>
                        <Column></Column>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount(){
        axios.get('/api/sudden').then(({data})=>{
            this.setState({
                list:data.list
            })
        })
        axios.get('/api/num').then(({data})=>{
            this.setState({
                numData:data.list
            })
        })
        
    }
    handleHot = () =>{
        axios.get('/api/hot').then(({data})=>{
            this.setState({
                list:data.list
            })
        })
    }
    handleSudden = () =>{
        axios.get('/api/sudden').then(({data})=>{
            this.setState({
                list:data.list
            })
        })
    }
}

export default Overall;