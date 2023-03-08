const { ModalBuilder, TextInputBuilder, ActionRowBuilder, ButtonBuilder } = require('@discordjs/builders');
const { TextInputStyle, ButtonStyle } = require('discord.js');

module.exports = {
  data: {
    name: 'productMenu'
  },
  async execute(interaction, client) {
    const modal = new ModalBuilder().setCustomId('purcheModal').setTitle(`${interaction.values[0]}`);
    const inputText = new TextInputBuilder().setCustomId('favColorInput').setLabel('What is your favorite color?').setRequired(true).setStyle(TextInputStyle.Short);
    modal.addComponents(new ActionRowBuilder().addComponents(inputText));
    await interaction.showModal(modal);
  }
};
