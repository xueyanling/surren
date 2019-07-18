import React, { Component } from 'react';
import content from './index.css'
import Aisai from '../../components/Aisaihead'
class Guan extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className={content.wrapper}>
                <Aisai/>
                {this.props.children}
            </div>
        );
    }
}

export default Guan;