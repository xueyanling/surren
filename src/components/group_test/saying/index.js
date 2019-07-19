import React, { Component } from 'react';
import qing from './index.css'

class Saying extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    render() {
        return (
            <ol className={qing.list}>
                <li>你为什么跟别人不一样</li>
                <li>你为什么跟别人不一样</li>
                <li>你为什么跟别人不一样</li>
                <li>你为什么跟别人不一样</li>
                <li>你为什么跟别人不一样</li>
                <li>你为什么跟别人不一样</li>
                <li>你为什么跟别人不一样</li>
            </ol>
        );
    }
}

export default Saying;