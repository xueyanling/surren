import React, { Component } from 'react';
import content from './index.css'
import { Button,Menu, Dropdown, Icon } from 'antd';
import router from 'umi/router'
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
class Jiance extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    handleMenuClick(e) {
        console.log('click', e);
    }
    
    render() {
        return (
            <div className={content.wrapper}>
                <div className={content.head}>
                    <div className={content.head_left}>
                        <div className={content.left_left}>
                            <span>埃塞俄比亚</span>
                            <Dropdown overlay={menu} className={content.choose}>
                            <Button>
                                全部账号 <Icon type="down" />
                            </Button>
                            </Dropdown>
                            <Dropdown overlay={menu} className={content.choose}>
                            <Button>
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
                <p className={content.tabs}>
                    <span ref='tab1' className={content.active} onClick={()=>this.tabone()}>监测结果</span>
                    <span ref='tab2' onClick={()=>this.tabtwo()}>监测分析</span>
                </p>
                {this.props.children}
            </div>
        );
    }
    tabone(){
        this.refs.tab1.classList.add(content.active)
        this.refs.tab2.classList.remove(content.active)
        router.push('/content_testing/testing_result')
    }
    tabtwo(){
        this.refs.tab1.classList.remove(content.active)
        this.refs.tab2.classList.add(content.active)
        router.push('/content_testing/testing_fenxi')
    }
}

export default Jiance;