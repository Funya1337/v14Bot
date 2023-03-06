const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
const { btnArray } = require('../pages/navBar');

const getExampleEmbed = (interaction) => new EmbedBuilder().setTitle('Основное меню').setDescription('Выберите категорию').setThumbnail(interaction.user.displayAvatarURL());

module.exports = {
  getExampleEmbed,
  createDirectMessage: (interaction) => ({ embeds: [getExampleEmbed(interaction)], components: [new ActionRowBuilder().addComponents(btnArray)] }),
  replyEvent: (interaction) =>
    interaction.reply({
      embeds: [getExampleEmbed(interaction)],
      components: [new ActionRowBuilder().addComponents(btnArray)]
    })
};
