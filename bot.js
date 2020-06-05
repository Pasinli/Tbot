require(['require', 'tmi.js'], function (require) {
   tmi = require('tmi.js');
});




console.log(tmi);

// Define configuration options
const opts = {
  identity: {
    username: "xhank",
    password: "oauth:5xlv2gbaoqh6bhwxq7y12x7bzn73yh",
  },
  channels: [
    'xhank',
  ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot
  console.log(target,context,msg,self);
  // Remove whitespace from chat message
  const commandName = msg.trim();

  if (commandName == '!instagram') {
    client.say(target, 'https://www.instagram.com/hakanpasinli/ '+'@'+context['display-name']);
    console.log(`* Executed ${commandName} command`);
  }
 
  
  
  
  
}

























 







// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
