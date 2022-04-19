"use strict";
const unparsed = require("koa-body/unparsed.js");

module.exports = {
  async find(ctx) {
    return await strapi.services.video.find();
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    return await strapi.services.video.findOne({ id });
  },

  async create(ctx) {
    const unparsedBody = ctx.request.body[unparsed];
    const parsedBody = JSON.parse(unparsedBody)
    return await strapi.services.video.create(parsedBody);
  },

  async update(ctx) {
    const { id } = ctx.params;
    return await strapi.services.video.update({ id });
  },

  async delete(ctx) {
    const { id } = ctx.params;
    return await strapi.services.video.delete({ id });
  },
};
