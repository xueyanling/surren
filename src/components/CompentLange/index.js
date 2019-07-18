import React, { Component } from 'react';
import { formatMessage } from 'umi/locale';

class Index extends Component {
    render() {
        return (
            <span>
                {formatMessage({id:'navbar.station'})}
            </span>
        );
    }
}

export default Index;