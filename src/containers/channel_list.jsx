import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectChannel, fetchMessages } from '../actions';

class ChannelList extends Component {
  handleClick = (channel) => {
    this.props.selectChannel(channel);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(this.props.selectedChannel);
    }
  }

  render() {
    return (
      <div className='channels-container'>
        <ul>
        {this.props.channelList.map((channel) => {
          return <li className={channel === this.props.selectedChannel ? 'active' : null} onClick={() => this.handleClick(channel)}>#{channel}</li>
          })
        }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    channelList: state.channelList,
    selectedChannel: state.selectedChannel
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectChannel: selectChannel,
      fetchMessages: fetchMessages
     },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
