const { replyEvent } = require('../pages/profile');
const curUser = require('../../schemas/user');

module.exports = {
  data: {
    name: 'profileBtn'
  },
  async execute(interaction, client) {
    let userProfile = curUser.findOne({ userId: interaction.user.id }).select('userBalance');
    userProfile.exec((err, person) => {
      if (err) return handleError(err);
      replyEvent(interaction, person.userBalance);
    });
  }
};
