import React from 'react';

const Message = (props) => {
  return (
    <div className="message">
      <h2>{props.message.author}</h2>
      <p>{props.message.content}</p>
    </div>
  );
};

export default Message;
