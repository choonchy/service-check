const db = require('../config/connection');
const { User, Order, Vehicle, Product, ServiceHistory } = require('../models');
const userSeeds = require('./userSeeds.json');
const orderSeeds = require('./orderSeeds.json');
const vehicleSeeds = require('./vehicleSeeds.json');
const productSeeds = require('./productSeeds.json');
const serviceHistorySeeds = require('./serviceHistorySeeds.json');

db.once('open', async () => {
	try {
		await User.deleteMany({});
		await User.create(userSeeds);
		// await Vehicle.deleteMany({});
		// await Vehicle.create(vehicleSeeds);
		// await Product.deleteMany({});
		// await Product.create(productSeeds);

		// await Order.deleteMany({});
		// await Order.create(orderSeeds);
		// await ServiceHistory.deleteMany({});
		// await ServiceHistory.create(serviceHistorySeeds);

		console.log('all done!');
		process.exit(0);
	} catch (err) {
		throw err;
	}
});
