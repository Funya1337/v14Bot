const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder } = require('discord.js');
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

const menu = new SelectMenuBuilder()
  .setCustomId('productMenu')
  .setMaxValues(1)
  .setMinValues(1)
  .setOptions(
    new SelectMenuOptionBuilder({
      label: 'Nitro classic без гарантии',
      value: 'Nitro classic без гарантии'
    }),
    new SelectMenuOptionBuilder({
      label: 'Nitro classic с гарантией(24часа)',
      value: 'Nitro classic с гарантией(24часа)'
    }),
    new SelectMenuOptionBuilder({
      label: 'Nitro Full Year без гарантии',
      value: 'Nitro Full Year без гарантии'
    }),
    new SelectMenuOptionBuilder({
      label: 'Буст сервера',
      value: 'Буст сервера'
    }),
    new SelectMenuOptionBuilder({
      label: 'Spotify 1 мес',
      value: 'Spotify 1 мес'
    })
  );

module.exports = {
  replyEvent: (interaction) =>
    interaction.update({
      embeds: [getExampleEmbed(interaction)],
      components: [new ActionRowBuilder().addComponents(menu), new ActionRowBuilder().addComponents(btnArray)]
    })
};
