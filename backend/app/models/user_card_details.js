/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user_card_details', {
		'id': {
			type: DataTypes.STRING(12),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'ism_card_id': {
			type: DataTypes.STRING(20),
			allowNull: true,
			comment: "null"
		},
		'ism_card_issued_on': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'ism_card_valid_upto': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'sign_path': {
			type: DataTypes.STRING(150),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'user_card_details',
		timestamps: false
	});
};
