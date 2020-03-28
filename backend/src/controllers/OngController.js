
const generateUniqueId = require('../utils/generateUniqueId')
const connection = require('../database/connection')

module.exports = {
  async store(request, response) {

    const { name, email, whatsapp, city, uf } = request.body;
    const id = generateUniqueId();

    await connection('ong').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })
    console.log(id)
    return response.json({ id });
  },

  async index(request, response) {
    const ongs = await connection('ong').select('*');

    return response.json(ongs);
  },
  async delete(request, response) {
    const { id } = request.params;


    await connection('ong').where('id', id).delete();

    return response.status(204).send();
  }
}