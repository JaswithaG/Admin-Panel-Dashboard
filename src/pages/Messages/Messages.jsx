import "./Messages.css";

import { messages } from "../../data/navbarData";

const Messages = () => {
  return (
    <div className="messages-page">

      <h1>Messages</h1>

      <div className="message-list">

        {messages.map((msg) => (

          <div
            className="message-card"
            key={msg.id}
          >

            <div className="avatar-circle">

              {msg.sender.charAt(0)}

            </div>

            <div className="message-content">

              <h3>{msg.sender}</h3>

              <p>{msg.message}</p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Messages;