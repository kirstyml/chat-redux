import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createMessage } from '../actions'

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.createMessage(this.props.selectedChannel, this.props.userName, this.state.value);
    this.setState({ value: '' }); // Reset message input
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="channel-editor">
        <input ref={(input) => { this.messageBox = input; }} type="text" className="form-control" value={this.state.value} onChange={this.handleChange} />
        <button type="submit">
          Send
        </button>
      </form>
    )
  }
}

function mapStateToProps(state) {
 return {
  userName: state.userName,
  selectedChannel: state.selectedChannel
 };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage: createMessage },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
