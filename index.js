const { Client, Intents } = require("discord.js");
const botConfig = require("./botConfig.json");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once("ready", () => {
    console.log(`${client.user.username} est en ligne.`);
    client.user.setActivity("/ticket", { type: "PLAYING" });
});

client.on("messageCreate", message => {

    if (message.author.bot) return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    if (command == `${prefix}ticket`) {
        return message.channel.send("Votre ticket a été créé et reçu.");
    }

})

client.login(botConfig.process.env.TOKEN);