module.exports = {
  data: {
    name: 'addBalance'
  },
  async execute(interaction, client) {
    console.log(interaction);
    await interaction.update({
      embeds: [],
      components: [],
      content: `This is add balance page!`
    });
  }
};
