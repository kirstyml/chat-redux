// TODO: add and export your own actions
export function fetchMessages(channel) {
 const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
 .then(response => response.json());
 return {
 type: 'FETCH_MESSAGES',
 payload: promise
 };
}

export function createMessage(channel, author, content) {
  const post = {
    "author": author,
    "content": content
  }
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(r => r.json());

  return {
    type: 'MESSAGE_CREATED',
    payload: promise
  }
}

export function selectChannel(channel) {
  return {
    type: 'CHANNEL_SELECTED',
    payload: channel
  }
}
