import React, { Component } from 'react';
import {Input, Button, Select, DatePicker } from 'antd';
// import Search from './search'
import  styles from './mon_search.css'
import moment from 'moment';

class mon_search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            flag:false,
            display:'none'
         };
    }
    render() {
        const { Option } = Select;
        // const { MonthPicker, RangePicker } = DatePicker;
        // const dateFormat = 'YYYY/MM/DD';
        // const monthFormat = 'YYYY/MM';
        const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
        const {display}=this.state
        return (
            <div className={styles.monbox}>
        
                <div className={styles.searchbox}>
                    <i style={{marginLeft: 20 }} onClick={this.changeIcon} className={styles.borderUp}> </i>
                    <Input.Search
                    placeholder="请输入关键字"
                    enterButton="Search"
                    size="large"
                    style={{ width: '80%',marginLeft: 20 }}
                    onSearch={value => console.log(value)}
                    />
                    <Button type="primary" style={{ height: 40,marginLeft: 20 }}>监测管理</Button>
                </div>
                <div className={styles.selectbox}>
                <div style={{display:display}}>
                    <i style={{fontStyle:'normal',marginLeft: 20}}>通道：<Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
                </Select> </i>
                <i style={{fontStyle:'normal',marginLeft: 20}}>
                    开始时间：
                    <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} onChange={this.onChange}/>
                </i>
                <i style={{fontStyle:'normal',marginLeft: 20}}>
                    结束时间：
                    <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} onChange={this.onChange}/>
                </i>
                <br/>
                <i style={{fontStyle:'normal',marginLeft: 20}}>
                    标签：
                    <Select defaultValue="lucy" style={{ width: '80%', marginTop:20 }} onChange={this.handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
                </Select>
                </i>
                </div>  
                </div>
            </div>
        );
    }
    changeIcon=()=>{
        this.setState({
            flag:!this.state.flag
        })
        if(this.state.flag){
            this.setState({
                display:'none'
            })
        }else{
            this.setState({
                display:'block'
            })
        }
    }
    handleChange=(value)=>{
        console.log(`selected ${value}`);
      }
    onChange=(date, dateString)=>{
        console.log(date, dateString)
    }
}

export default mon_search;