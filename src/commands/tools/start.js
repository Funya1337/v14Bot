const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder().setName('start').setDescription('Shows main menu!'),
  async execute(interaction, client) {
    const newMessage = `start command test message`;
    // client.users.fetch('352454626810789888').then((dm) => {
    //   dm.send('Message to send');
    // });
    await interaction.editReply({
      content: newMessage
    });
  }
};
