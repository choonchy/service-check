const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const ServiceHistorySchema = new Schema({
	serviceDate: {
		type: Date,
		default: Date.now,
	},
	vehicle: {
		type: Schema.Types.ObjectId,
		ref: 'Vehicle',
	},
	submittedBy: {
		type: String,
	},
	odometer: {
		type: String,
	},
	notes: {
		type: String,
	},
});

const ServiceHistory = model('ServiceHistory', ServiceHistorySchema);

module.exports = ServiceHistory;
