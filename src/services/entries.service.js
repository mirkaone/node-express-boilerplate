const httpStatus = require('http-status');
const { Entries } = require('../models');
const ApiError = require('../utils/ApiError');

const createEntries = async (entriesBody) => {
  return Entries.create(entriesBody);
};

const getEntries = async () => {
  return Entries.find();
};

module.exports = {
  createEntries,
  getEntries,
};
