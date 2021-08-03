const { Schema, model } = require('mongoose');

const vehicleSchema = new Schema({
	vin: {
		type: String,
	},
	regoNumber: {
		type: String,
	},
	make: {
		type: String,
	},
	model: {
		type: String,
	},
	colour: {
		type: String,
	},
});

const Vehicle = model('Vehicle', vehicleSchema);

module.exports = Vehicle;
