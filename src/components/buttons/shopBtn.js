module.exports = {
  data: {
    name: 'shopBtn'
  },
  async execute(interaction, client) {
    console.log(interaction);
    await interaction.update({
      embeds: [],
      components: [],
      content: `This is a shop page!`
    });
  }
};
