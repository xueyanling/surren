import React, { Component } from 'react';
import { formatMessage } from 'umi/locale';

class Guroptest extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <span>
                {formatMessage({id:'navbar.testgroup'})}
            </span>
        );
    }
}

export default Guroptest;