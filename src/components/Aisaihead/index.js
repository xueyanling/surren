import React, { Component } from 'react';
import content from './index.css'
import { Button,Menu, Dropdown, Icon } from 'antd';
function handleMenuClick(e) {
    console.log('click', e);
  }
const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">1st item</Menu.Item>
      <Menu.Item key="2">2nd item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  );
class Aisai extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    handleMenuClick(e) {
        console.log('click', e);
    }
    render() {
        return (
            <div className={content.head}>
                    <div className={content.head_left}>
                        <div className={content.left_left}>
                            <span>埃塞俄比亚</span>
                            <Dropdown overlay={menu} className={content.choose}>
                            <Button style={{height:'30px',width:'110px'}}>
                                全部账号 <Icon type="down" />
                            </Button>
                            </Dropdown>
                            <Dropdown overlay={menu} className={content.choose}>
                            <Button style={{height:'30px',width:'110px'}}>
                                全部群组 <Icon type="down" />
                            </Button>
                            </Dropdown>
                        </div>
                        <Dropdown className={content.more} overlay={menu}>
                        <Button>
                            更多 <Icon type="down" />
                        </Button>
                        </Dropdown>
                    </div>
                    <Button className={content.btn}>监测管理</Button>
                </div>
        );
    }
}

export default Aisai;