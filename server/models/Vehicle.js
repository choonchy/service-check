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
	serviceHistory: {
		type: Schema.Types.ObjectId,
		ref: 'ServiceHistory',
	},
});

const Vehicle = model('Vehicle', vehicleSchema);

module.exports = Vehicle;
