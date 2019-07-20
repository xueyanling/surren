import React, { Component } from 'react';
import Resultlist from '../../../components/monitor/searchlist'
import result from './index.css'
import axios from 'axios'
class Result extends Component {
    constructor(props) {
        super(props);
        this.state = { 
              list:null
         };
    }
    componentDidMount(){
      axios.get('/api/resultlist').then(({data})=>{
        console.log(data)
        this.setState({
            list:data
        })
      })
  }
    render() {
      let {list} = this.state
        return (
          <div className={result.wrapper}>
            <div className={result.top}>
              <b>列表展示</b>
              <b>总数：<span>666666</span></b>
            </div>
            <Resultlist option={list}/>
          </div>
        );
    }
}

export default Result;