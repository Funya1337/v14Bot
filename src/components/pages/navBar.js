const { ButtonBuilder, ButtonStyle } = require('discord.js');

const shopBtn = new ButtonBuilder().setLabel('🎁 Магазин').setCustomId('shopBtn').setStyle(ButtonStyle.Success);
const profileBtn = new ButtonBuilder().setLabel('😀 Профиль').setCustomId('profileBtn').setStyle(ButtonStyle.Success);
const supportBtn = new ButtonBuilder().setLabel('🆘 Поддержка').setCustomId('supportBtn').setStyle(ButtonStyle.Success);

module.exports = {
  btnArray: [shopBtn, profileBtn, supportBtn]
};
