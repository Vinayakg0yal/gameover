var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = ">" //The text before commands, you can put anything that you prefer

    if(message.author.id != "656542594406416391" && message.channel.id === "656658556011020288"){
        if(msg.startsWith('>', 0)){
            if(msg =    == prefix + "yt" && message.channel.id === "656658556011020288"){
                message.channel.send('CHANNEL LINK!!! https://www.youtube.com/channel/UCs9mR_zW4UJotnbv5pf3wwQ ') // Sends a message to the channel, with the content
            }  
            else{
                message.channel.send("Hey, I only understand some right now. More will be added when my creator is free. :) ")
            }
        }
       
    }
});
bot.login(process.env.BOT_TOKEN)
