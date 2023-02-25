const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder().setName('ping').setDescription('Returns my ping!'),
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true
    });

    const newMessage = `test message`;
    await interaction.editReply({
      content: newMessage
    });
  }
};
