module.exports = {
  data: {
    name: 'purcheModal'
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: `You said your favorite color is: ${interaction.fields.getTextInputValue('favColorInput')}`
    });
  }
};
