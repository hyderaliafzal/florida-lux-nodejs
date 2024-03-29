const mongoose = require('mongoose');

const agentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    code: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    address: {
      addressLine1: {
        type: String,
      },
      addressLine2: {
          type: String,
        },
      state: {
          type: String,
        },
      city: {
          type: String,
        },
      country: {
          type: String,
        },
      zipCode: {
          type: String,
      },
    },
    description: {
        type: String,
    },
    reference: {
        type: String,
    },
    photo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef Agent
 */
const Agent = mongoose.model('Agent', agentSchema);

module.exports = Agent;
