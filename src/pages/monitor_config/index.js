import React, { Component } from 'react';
import Message from './message'
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Message></Message>
            </div>
        );
    }
}

export default index;