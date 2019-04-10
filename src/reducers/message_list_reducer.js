// import { FETCH_MESSAGES } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case 'FETCH_MESSAGES': {
      return action.payload.messages;
    }
    case 'MESSAGE_CREATED': {
      let newList = state.slice(0);
      newList.push(action.payload);
      return newList;
    }
    default:
      return state;
  }
}
