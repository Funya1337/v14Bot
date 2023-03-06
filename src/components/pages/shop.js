const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
const { btnArray } = require('../pages/navBar');

const getExampleEmbed = (interaction) =>
  new EmbedBuilder().setTitle('Категории магазина').addFields(
    {
      name: 'Nitro Monthly',
      value: `Classic без гарантии
Classic с гарантией(24часа)
Nitro Full Year без гарантии`,
      inline: true
    },
    { name: 'Бусты для вашего сервера', value: 'Бусты для сервера', inline: true },
    { name: '\u200A', value: '\u200A' },
    { name: 'Music', value: 'Spotify 1 мес' }
  );

module.exports = {
  replyEvent: (interaction) =>
    interaction.update({
      embeds: [getExampleEmbed(interaction)],
      components: [new ActionRowBuilder().addComponents(btnArray)]
    })
};
