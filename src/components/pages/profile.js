const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

const getExampleEmbed = (interaction) =>
  new EmbedBuilder()
    .setTitle(`Профиль — ${interaction.user.username}#${interaction.user.discriminator}`)
    .setThumbnail(interaction.user.displayAvatarURL())
    .addFields([
      {
        name: '🐢Баланс:',
        value: '```\nvalue\n```',
        inline: true
      },
      {
        name: '🥑Потрачено:',
        value: '```\nvalue\n```',
        inline: true
      },
      {
        name: '🍏Куплено:',
        value: '```\nvalue\n```',
        inline: true
      }
    ]);

module.exports = {
  replyEvent: (interaction) =>
    interaction.update({
      embeds: [getExampleEmbed(interaction)],
      components: []
    })
};
