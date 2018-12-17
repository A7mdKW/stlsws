const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'
client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
if (message.content.startsWith(prefix + 'playing')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}** : Status changed`)
} else
if (message.content.startsWith(prefix + 'Stream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/ChampionBot");
    message.channel.sendMessage(`**${argresult}** :The bot stream has been changed`)
} else
if (message.content.startsWith(prefix + 'watching')) {
  if (message.author.id !== '351472610732670976') return message.reply('**only for the botowner **')
    client.user.setActivity(argresult, {type : 'watching'});
 message.channel.sendMessage(`**${argresult}** : Watching changed to`)
 message.react("👌")
 
 if (message.content.startsWith(prefix + 'listening')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`LISTENING Now: **${argresult}`)
} 
}
});


client.login(process.env.BOT_TOKEN);