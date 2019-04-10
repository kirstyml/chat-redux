// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import selectedChannelReducer from './reducers/selected_channel_reducer';
import messageListReducer from './reducers/message_list_reducer';
import channelListReducer from './reducers/channel_list_reducer';
import userNameReducer from './reducers/user_name_reducer';

// State and reducers
const reducers = combineReducers({
  messageList: messageListReducer,
  channelList: channelListReducer,
  selectedChannel: selectedChannelReducer,
  userName: userNameReducer
});

const initialState = {
  messageList: [
    {
      "author":"anonymous92",
      "content":"Hello world!",
      "created_at":"2017-09-26T23:03:16.365Z"
    },
    {
      "author":"anonymous77",
      "content":"My name is anonymous77",
      "created_at":"2017-09-26T23:03:21.194Z"
    }
  ],
  channelList: ['general', 'react', 'paris'],
  selectedChannel: 'general',
  userName: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
};

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
