module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    console.log(`Ready!!! ${client.user.tag} is logged in and online`);
    client.user.setPresence({ activities: [{ name: `discord.js v14`, type: 'watching' }], status: '/ping в лс' });
  }
};
