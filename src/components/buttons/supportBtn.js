module.exports = {
  data: {
    name: 'supportBtn'
  },
  async execute(interaction, client) {
    console.log(interaction);
    await interaction.update({
      embeds: [],
      components: [],
      content: `This is a support page!`
    });
  }
};
