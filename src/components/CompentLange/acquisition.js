import React, { Component } from 'react';
import { formatMessage } from 'umi/locale';

class Acquist extends Component {
    render() {
        return (
            <span>
                {formatMessage({id:'navbar.acquisition'})}
            </span>
        );
    }
}

export default Acquist;