const { replyEvent } = require('../pages/profile');

module.exports = {
  data: {
    name: 'profileBtn'
  },
  async execute(interaction, client) {
    replyEvent(interaction);
  }
};
