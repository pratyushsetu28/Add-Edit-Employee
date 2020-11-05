/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user_address', {
		'id': {
			type: DataTypes.STRING(12),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'line1': {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: "null"
		},
		'line2': {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: "null"
		},
		'city': {
			type: DataTypes.STRING(150),
			allowNull: false,
			comment: "null"
		},
		'state': {
			type: DataTypes.STRING(150),
			allowNull: false,
			comment: "null"
		},
		'pincode': {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: "null"
		},
		'country': {
			type: DataTypes.STRING(150),
			allowNull: false,
			comment: "null"
		},
		'contact_no': {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: "null"
		},
		'type': {
			type: DataTypes.STRING(100),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		}
	}, {
		tableName: 'user_address',
		timestamps: false
	});
};
