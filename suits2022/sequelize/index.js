const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup');

// In a real app, you should keep the database connection URL as an environment variable.
// But for this example, we will just use a local SQLite database.
// const sequelize = new Sequelize(process.env.DB_CONNECTION_URL);
const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'suitsdb/suits.sqlite',
	logQueryParameters: false,
	logging: false,
	benchmark: true
});

const modelDefiners = [
	require('./models/location.model'),
	require('./models/role.model.js'),
	require('./models/room.model'),
	require('./models/simulationcontrol.model'),
	require('./models/simulationfailure.model'),
	require('./models/simulationstate.model'),
	require('./models/simulationstateUIA.model'),
	require('./models/simulationUIA.model'),
	require('./models/user.model')
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

// We execute any extra setup after the models are defined, such as adding associations.
applyExtraSetup(sequelize);

sequelize.sync({ force: true }); // Make sure that newly added models sync to the database.

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;
