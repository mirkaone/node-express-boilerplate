const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const entriesSchema = mongoose.Schema(
  {
    header: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
entriesSchema.plugin(toJSON);
entriesSchema.plugin(paginate);

/**
 * @typedef Entries
 */
const Entries = mongoose.model('Entries', entriesSchema);

module.exports = Entries;
