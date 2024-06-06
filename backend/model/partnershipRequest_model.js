const mongoose = require('mongoose');

const partnershipRequestSchema = new mongoose.Schema({
  establishmentName: {
    type: String,
    required: true,
  },
  establishmentType: {
    type: String,
    required: true,
    enum: ['Hotel', 'Riad', 'Guide'], // Ensure the type matches one of these
  },
  contactName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('PartnershipRequest', partnershipRequestSchema);
