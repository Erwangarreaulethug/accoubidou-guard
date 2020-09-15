const Discord = require('discord.js');
const fs = require('fs');

let tokenRAW = fs.readFileSync('token.json');
let token = JSON.parse(tokenRAW);

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content.toLowerCase().replace(/ /g, "").includes('ping')) {
        msg.reply('Pong!');
    }
});

client.login(token["token"]);