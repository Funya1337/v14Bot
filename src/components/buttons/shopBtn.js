const { replyEvent } = require('../pages/shop');

module.exports = {
  data: {
    name: 'shopBtn'
  },
  async execute(interaction, client) {
    replyEvent(interaction);
  }
};
