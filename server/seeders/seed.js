const db = require('../config/connection');
const { User, Order, Vehicle } = require('../models');
const userSeeds = require('./userSeeds.json');
const orderSeeds = require('./orderSeeds.json');
const vehicleSeeds = require('./vehicleSeeds.json');

db.once('open', async () => {
	try {
		await User.deleteMany({});
		await User.create(userSeeds);
		await Order.deleteMany({});
		await Order.create(orderSeeds);
		await Vehicle.deleteMany({});
		await Vehicle.create(vehicleSeeds);

		console.log('all done!');
		process.exit(0);
	} catch (err) {
		throw err;
	}
});
