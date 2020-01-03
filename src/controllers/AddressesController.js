const Address = require('../models/Addresses');
const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { user_id } = req.params;
    const { zipcode, street, number } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ Error: 'User not found' });
    }

    const address = await Address.create({ zipcode, street, number, user_id }).catch((err) => {
      return res.status(500).json({ Error: err.message });
    });

    return res.status(200).json(address);
  },

  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: {
        association: 'addresses'
      }
    });

    return res.status(200).json(user.addresses);
  }
}