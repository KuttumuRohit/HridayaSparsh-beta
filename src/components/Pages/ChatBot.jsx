import React from 'react';

const ChatBot = () => {
  return (
    <div className="w-full sm:w-1/2 h-screen mx-auto">
      <iframe
        src="https://cdn.botpress.cloud/webchat/v2/shareable.html?botId=3fe671d3-dee8-4ea8-8cab-71b83ca9a387"
        className="w-full h-full border-none"
        title="ChatBot"
      ></iframe>
    </div>
  );
};

export default ChatBot;
