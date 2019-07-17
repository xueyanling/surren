import React, { Component } from 'react';
// import styles from './ListRight.css'
class ListRight extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <ul style={{padding:0}}>
                <li style={{width:'100%',display:'flex',justifyContent:'space-between',height: '30px',lineHeight:' 30px',listStyle: 'none',marginTop:'10px',background:'rgb(233, 231, 231)',padding:'0 5px'}}>
                    <p>
                        <span>1</span>
                        <span>You have 4 pending tasks</span>
                    </p>
                    <span>
                        just now
                    </span>
                </li>
            </ul>
        );
    }
}

export default ListRight;