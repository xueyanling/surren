import React, { Component } from 'react';
import { formatMessage } from 'umi/locale';

class Analaysis extends Component {
    render() {
        return (
            <span>
                {formatMessage({id:'navbar.analysis'})}
            </span>
        );
    }
}

export default Analaysis;