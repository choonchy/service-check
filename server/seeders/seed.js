const db = require('../config/connection');
const { User, Order } = require('../models');
const userSeeds = require('./userSeeds.json');
const orderSeeds = require('./orderSeeds.json');

db.once('open', async () => {
	try {
		await User.deleteMany({});
		await User.create(userSeeds);
		await Order.deleteMany({});
		await Order.create(orderSeeds);

		console.log('all done!');
		process.exit(0);
	} catch (err) {
		throw err;
	}
});
