import React, { Component } from 'react';
import Aisai from '../../../components/Aisaihead'
import zhao from './index.css'
import Upline from '../../../components/group_test/upline'
import Saying from '../../../components/situation/ListRight'
import Nice from '../../../components/group_test/content_nice'
import  Qing from '../../../components/group_test/qinggan'
import axios from 'axios'
class Zhao extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            saylist:null
         };
    }
    componentDidMount(){
        axios.get('/api/hot').then(({data})=>{
                this.setState({
                    saylist:data
                })
        })
    }
    render() {
        let {saylist} =this.state
        return (
            <div className={zhao.wrapper}>
                <div>
                   <Aisai/> 
                </div>
                
                <div className={zhao.content}>
                    <div>
                        <h3>上线情况</h3>
                        <Upline/>
                    </div>
                    <div>
                        <h3 className={zhao.btns}><span >言论情况</span><p><span className={zhao.active} onClick={()=>this.hot()} ref='hot'>热点</span><span onClick={()=>this.sudden()} ref='sudden'>国际</span></p></h3>
                        <Saying options={saylist}/>
                    </div>
                    <div>
                        <h3>内容偏好</h3>
                        <Nice/>
                    </div>
                    <div>
                        <h3>情感分析</h3>
                        <Qing/>
                    </div>
                </div>
            </div>
        );
    }
    hot(){
        this.refs.hot.classList.add(zhao.active)
        this.refs.sudden.classList.remove(zhao.active)
        axios.get('/api/hot').then(({data})=>{
            console.log(data)
            this.setState({
                saylist:data
            })
        })
    }
    sudden(){
        this.refs.hot.classList.remove(zhao.active)
        this.refs.sudden.classList.add(zhao.active)
        axios.get('/api/sudden').then(({data})=>{
            this.setState({
                saylist:data
            })
        })
    }
}

export default Zhao;