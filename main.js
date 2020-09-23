const Discord = require('discord.js');
const fs = require('fs');

let tokenRAW = fs.readFileSync('token.json');
let token = JSON.parse(tokenRAW);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(!msg.author.bot) {
        if (msg.content.toLowerCase().replace(/ /g, "").includes('slt')) {
            msg.reply('Wech la chèvre!');
        }

        if (msg.content.toLowerCase().replace(/ /g, "").includes('hello')) {
            msg.reply('Uuuuuuuuuuuuuddddddddddddeeeeeeeeeeeeeeeeeerrrrrrrrrrrrssssssssssssssssttttttttttttttttoooooooooooooooooooodddddd!');
        }

        if (msg.content.toLowerCase().replace(/ /g, "").includes('salut')) {
            msg.reply('TG');
        }

        if (msg.content.toLowerCase().replace(/ /g, "").includes('fdp')) {
            msg.reply('Ta mere toi meme');
        }

        if (msg.content.toLowerCase().replace(/ /g, "").includes('ui')) {
            msg.reply('Tu veux pas dire Oui ?');
        }

        if (getRandomInt(100) === 7) {
            msg.reply("TG toi je t'aime pas"); // get random 1/10
        }
    }
});

client.login(token["token"]);
