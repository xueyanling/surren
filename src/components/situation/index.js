import React, { Component } from 'react';
import CountUp from 'react-countup';
import style from './index.css'
class index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            num:0
        };
    }
    componentDidMount(){
        let num = Math.floor(Math.random()*(30000-3000)+ 3000);
        this.setState({
            num
        })
    }

    render() {
        const {numlist} = this.props
        return (
            <div className={style.box}>
                {
                    numlist.map(item=>(
                       
                <div className={style.list} key={item.id}>
                <p>
                       <span style={{fontSize:'24px',fontWeight:'bold',color:'#8877a9'}}>
                            <CountUp end={item.num} duration={5} />  
                       </span>
                       <span style={{fontSize:'20px'}}>
                           Tor
                       </span>
                   </p>
                   <h3 style={{fontWeight:'bold'}}>
                       全部数据量
                    </h3>
                    <p style={{width:'100%',height:'5px',background:'#eee'}}></p>
                    <p>
                        <span style={{fontSize:'12px'}}>今日数据量</span>
                        <span style={{color:'#8877a9',fontSize:'12px'}}>300</span>
                    </p> 
                </div>
            
                    ))
                }
            </div>
        );
    }
    
}

export default index;