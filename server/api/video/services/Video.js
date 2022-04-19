module.exports = {
  /**
   * Promise to fetch all records
   *
   * @return {Promise}
   */
  async find(params, populate) {
    return strapi.query("video").find(params, populate);
  },

  async findOne(params, populate) {
    return strapi.query("video").findOne(params, populate);
  },

  async create(data) {
    return await strapi.query("video").create(data);
  },

  async update(params, data, { files } = {}) {
   return await strapi.query("video").update(params, data);
  },

  async delete(params) {
    return strapi.query("video").delete(params);
  },
};
