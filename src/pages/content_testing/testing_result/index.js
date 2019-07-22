import React, { Component } from 'react';
import Resultlist from '../../../components/monitor/searchlist'
import result from './index.css'
import {connect} from 'dva'
class Result extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         };
    }
    componentDidMount(){
      this.props.dispatch({
          type:'contentest/listFn'
      })
  }
    render() {
      let {list,ind} = this.props
        return (
          <div className={result.wrapper}>
            <div className={result.top}>
              <b>列表展示{this.props.ind}</b>
              <b>总数：<span>666666</span></b>
            </div>
            <Resultlist option={list}/>
          </div>
        );
    }
}

export default connect(
    (state)=>{
      return {...state.contentest}
    }
)(Result);