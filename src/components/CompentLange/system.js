import React, { Component } from 'react';
import { formatMessage } from 'umi/locale';

class System extends Component {
    render() {
        return (
            <span>
                {formatMessage({id:'navbar.systemt'})}
            </span>
        );
    }
}

export default System;