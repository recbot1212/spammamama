const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("538911343252733952")
setInterval(function() {
channel.send(`طز في اللي يلعب فورت ويستعمل هاك زي النوب والكلب البلديXD`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
