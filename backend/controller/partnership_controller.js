const PartnershipRequest = require('../model/partnershipRequest_model');

exports.submitRequest = async (req, res) => {
  try {
    const { establishmentName, establishmentType, contactName, role, email, phone } = req.body;
    
    // Create a new partnership request instance
    const newRequest = new PartnershipRequest({
      establishmentName,
      establishmentType,
      contactName,
      role,
      email,
      phone
    });

    // Save the request to the database
    await newRequest.save();

    res.status(201).send({ message: 'Partnership request submitted successfully.' });
  } catch (error) {
    res.status(400).send({ message: 'Failed to submit partnership request.', error: error.message });
  }
};
