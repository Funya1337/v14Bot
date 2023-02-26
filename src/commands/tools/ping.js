const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
const mongoose = require('mongoose');
const curUser = require('../../schemas/user');
const { replyEvent, createDirectMessage } = require('../../components/pages/index');

module.exports = {
  data: new SlashCommandBuilder().setName('ping').setDescription('Returns my ping!'),
  async execute(interaction, client) {
    let userProfile = await curUser.findOne({ userId: interaction.user.id });
    if (!userProfile)
      userProfile = await new curUser({
        _id: mongoose.Types.ObjectId(),
        userId: interaction.user.id,
        userName: interaction.user.username,
        userBalance: 0
      });
    await userProfile.save().catch(console.error);
    if (interaction.channel != null) {
      const dm = await interaction.client.users.fetch(interaction.user.id);
      dm.send(createDirectMessage(interaction));
    } else {
      await replyEvent(interaction);
    }
  }
};
