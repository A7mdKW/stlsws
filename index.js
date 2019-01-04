const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'
client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "351472610732670976") return;

  
  if (message.content.startsWith(prefix + 'setwatching')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`**Watch Now: **${argresult}`)
} 

 
  if (message.content.startsWith(prefix + 'setlistening')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`LISTENING Now: **${argresult}`)
} 


if (message.content.startsWith(prefix + 'setstream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/KiNg66S");
     console.log('test' + argresult);
    message.channel.sendMessage(`**Streaming: **${argresult}`)
} 
});


client.login(process.env.USER_TOKEN);
