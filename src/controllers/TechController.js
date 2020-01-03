const Tech = require('../models/Techs');
const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ Error: 'User not found' });
    }

    const [tech] = await Tech.findOrCreate({
      where: { name }
    });

    await user.addTechs(tech);

    return res.status(200).json(tech);
  },

  async index(req, res) {

  }
}