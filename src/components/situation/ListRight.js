import React, { Component } from 'react';
// import styles from './ListRight.css'
 
class ListRight extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         };
    }
    render() {
        const {options} = this.props
        return (
            <ul style={{padding:0}}>
                {
                    options.map(item=>(
                        <li key={item.id} style={{width:'100%',display:'flex',justifyContent:'space-between',height: '30px',lineHeight:' 30px',listStyle: 'none',marginTop:'10px',background:'rgb(233, 231, 231)',padding:'0 5px'}}>
                    <p>
                        <i style={{display:'inline-block',width:'20px',height:'20px',lineHeight:'20px',textAlign:'center',background:'skyblue',marginRight:'5px',fontStyle:'normal'}}>
                        {item.id}</i>
                        <i style={{fontStyle:'normal'}}>{item.title}</i>
                    </p>
                    <span>
                        just now
                    </span>
                </li>
                    ))
                }
                
            </ul>
        );
    }
    
}

export default ListRight;