const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { entriesService } = require('../services');

const createEntries = catchAsync(async (req, res) => {
  const entries = await entriesService.createEntries(req.body);
  res.status(httpStatus.CREATED).send(entries);
});

const getEntries = catchAsync(async (req, res) => {
  const entries = await entriesService.getEntries();
  res.status(httpStatus.OK).send(entries);
});

module.exports = {
  createEntries,
  getEntries,
};
