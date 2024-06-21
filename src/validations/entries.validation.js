const Joi = require('joi');

const createEntries = {
  body: Joi.object().keys({
    header: Joi.string().required(),
    content: Joi.string().required(),
  }),
};

const getEntries = {
  body: Joi.object().keys({}),
};

module.exports = {
  createEntries,
  getEntries,
};
