const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

const getExampleEmbed = (interaction) => new EmbedBuilder().setTitle('Основное меню').setDescription('Выберите категорию').setThumbnail(interaction.user.displayAvatarURL());
const shopBtn = new ButtonBuilder().setLabel('🎁 Магазин').setCustomId('shopBtn').setStyle(ButtonStyle.Success);
const profileBtn = new ButtonBuilder().setLabel('😀 Профиль').setCustomId('profileBtn').setStyle(ButtonStyle.Success);
const supportBtn = new ButtonBuilder().setLabel('🆘 Поддержка').setCustomId('supportBtn').setStyle(ButtonStyle.Success);

module.exports = {
  getExampleEmbed,
  createDirectMessage: (interaction) => ({ embeds: [getExampleEmbed(interaction)], components: [new ActionRowBuilder().addComponents([shopBtn, profileBtn, supportBtn])] }),
  replyEvent: (interaction) =>
    interaction.reply({
      embeds: [getExampleEmbed(interaction)],
      components: [new ActionRowBuilder().addComponents([shopBtn, profileBtn, supportBtn])]
    })
};
