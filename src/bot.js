require('dotenv').config();
const { TOKEN, DBTOKEN } = process.env;
const mongoose = require('mongoose');
const { Client, Collection, ActivityFlagsBitField, GatewayIntentBits } = require('discord.js');
const fs = require('fs');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessages, GatewayIntentBits.DirectMessageReactions],
  partials: ['CHANNEL']
});

client.commands = new Collection();
client.buttons = new Collection();
client.selectMenus = new Collection();
client.modals = new Collection();
client.commandArray = [];

const functionFolders = fs.readdirSync('./src/functions');
for (const folder of functionFolders) {
  const functionFiles = fs.readdirSync(`./src/functions/${folder}`).filter((file) => file.endsWith('.js'));
  for (const file of functionFiles) require(`./functions/${folder}/${file}`)(client);
}

client.handleEvents();
client.handleComponents();
client.handleCommands();
client.login(TOKEN);
mongoose.set('strictQuery', true);
(async () => {
  await mongoose.connect(DBTOKEN).catch(console.error);
})();

// client.on('ready', () => {
//   console.log(`Logged in as ${client.user.tag}!`);
// client.users.fetch('352454626810789888').then((dm) => {
//   dm.send('Message to send');
// });
// });

// client.on('messageCreate', (message) => {
//   console.log(message);
// });
