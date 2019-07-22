import React, { Component } from 'react';
import { Comment, Icon, Tooltip, Avatar } from 'antd';
import moment from 'moment';

class Point extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            likes: 0,
            dislikes: 0,
            action: null,
         };
    }
    like = () => {
        this.setState({
          likes: 1,
          dislikes: 0,
          action: 'liked',
        });
      };
    
      dislike = () => {
        this.setState({
          likes: 0,
          dislikes: 1,
          action: 'disliked',
        });
      };
    
    render() {
        const { likes, dislikes, action } = this.state;
        const actions = [
      <span>
        <Tooltip title="Like">
          <Icon
            type="like"
            theme={action === 'liked' ? 'filled' : 'outlined'}
            onClick={this.like}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
      </span>,
      <span>
        <Tooltip title="Dislike">
          <Icon
            type="dislike"
            theme={action === 'disliked' ? 'filled' : 'outlined'}
            onClick={this.dislike}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
      </span>,
      <span>Reply to</span>,
    ];
    let {option}=this.props
        return (
            <Comment
                actions={actions}
                author={<a> {option.author} </a>}
                avatar={
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                />
                }
                content={
                <p>
                    {option.txt}
                </p>
                }
                datetime={
                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().fromNow()}</span>
                </Tooltip>
                }
          />
        );
    }
}

export default Point;