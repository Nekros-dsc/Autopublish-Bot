

const { Client, Intents, Options } = require("discord.js");
const config = require("./config.json");

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.once("ready", () => {
	console.log(`Bot connecté ${client.user.tag} (${client.user.id}) SUPPORT = https://discord.gg/novaworld`);
	
});

client.on("messageCreate", async (message) => {
	if (message.channel.type !== "GUILD_NEWS") return;
	try {
		await message.crosspost();
		console.log('Le message a été envoyé')
	} catch {} 
});

client.login(config.token);
