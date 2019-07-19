import React, { Component } from 'react';
import { formatMessage } from 'umi/locale';

class Contestlage extends Component {
    render() {
        return (
            <span>
                {formatMessage({id:'navbar.testContent'})}
            </span>
        );
    }
}

export default Contestlage;