module.exports = {
  data: {
    name: 'profileBtn'
  },
  async execute(interaction, client) {
    console.log(interaction);
    await interaction.update({
      embeds: [],
      components: [],
      content: `This is a profile page!`
    });
  }
};
