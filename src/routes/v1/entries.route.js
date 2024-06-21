const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const entriesValidation = require('../../validations/entries.validation');
const entriesController = require('../../controllers/entries.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('createEntries'), validate(entriesValidation.createEntries), entriesController.createEntries)
  .get(auth('getEntries'), validate(entriesValidation.getEntries), entriesController.getEntries);

module.exports = router;
