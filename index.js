const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} !`);
          client.user.setActivity("You",{type: 'WATCHING'});
  
  });


client.login(process.env.USER_TOKEN);
