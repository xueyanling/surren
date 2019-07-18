import React, { Component } from 'react';
import { Select } from 'antd';
const { Option } = Select;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
function handleChange(value) {
  console.log(`selected ${value}`);
}
class Zhang extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Select
                mode="multiple"
                style={{ width: '20%' }}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
                onChange={handleChange}
            >
                {children}
            </Select>
        );
    }
}

export default Zhang;