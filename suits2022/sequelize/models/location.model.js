const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
	sequelize.define('location', {
		// The following specification of the 'id' attribute could be omitted
		// since it is the default.
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
        user: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
		latitude: {
			allowNull: false,
			type: DataTypes.NUMBER
		},
        longitude: {
			allowNull: false,
			type: DataTypes.NUMBER
		},
        altitude: {
			allowNull: false,
			type: DataTypes.NUMBER
		},
        accuracy: {
			allowNull: false,
			type: DataTypes.NUMBER
		},
        altitudeAccuracy: {
			allowNull: false,
			type: DataTypes.NUMBER
		},
        heading: {
			allowNull: false,
			type: DataTypes.NUMBER
		},
        speed: {
			allowNull: false,
			type: DataTypes.NUMBER
		}
	});
};
