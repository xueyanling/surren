import React, { Component } from 'react';
import content from './index.css'
import Fenxi from './testing_fenxi'
import Result from './testing_result'
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    
    render() {
        return (
            <div className={content.smail}>
                <Result/>
            </div>
        );
    }
}

export default Content;