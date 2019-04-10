import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Message from '../components/message';
import MessageForm from './message-form';
import { fetchMessages } from '../actions'

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.interval = setInterval(this.fetchMessages, 3000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {
    return (
      <div className="message-list" ref={(list) => { this.list = list; }}>
        <h1 className="channel-title">Channel #{this.props.selectedChannel}</h1>
        <ul className="channel-content">
          {this.props.messageList.map((message) => {
            return <Message key={message.id} message={message} />
            })
          }
        </ul>
        <MessageForm />
      </div>
    );
  }
};

function mapStateToProps(state) {
 return {
  messageList: state.messageList,
  selectedChannel: state.selectedChannel
 };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages: fetchMessages },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
