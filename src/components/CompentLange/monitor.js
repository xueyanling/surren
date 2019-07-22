import React, { Component } from 'react';
import { formatMessage } from 'umi/locale';

class Monitor extends Component {
    render() {
        return (
            <span>
                {formatMessage({id:'navbar.monitoring'})}
            </span>
        );
    }
}

export default Monitor;