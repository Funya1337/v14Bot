const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder().setName('ping').setDescription('Returns my ping!'),
  async execute(interaction, client) {
    const exampleEmbed = new EmbedBuilder().setTitle('Основное меню').setDescription('Выберите категорию').setThumbnail(interaction.user.displayAvatarURL());
    const shopBtn = new ButtonBuilder().setLabel('🎁 Магазин').setCustomId('shopBtn').setStyle(ButtonStyle.Success);
    const profileBtn = new ButtonBuilder().setLabel('😀 Профиль').setCustomId('profileBtn').setStyle(ButtonStyle.Success);
    const supportBtn = new ButtonBuilder().setLabel('🆘 Поддрежка').setCustomId('supportBtn').setStyle(ButtonStyle.Success);
    await interaction.reply({
      embeds: [exampleEmbed],
      components: [new ActionRowBuilder().addComponents([shopBtn, profileBtn, supportBtn])]
    });
  }
};
