/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('auth_types', {
		'id': {
			type: DataTypes.STRING(20),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'type': {
			type: DataTypes.STRING(150),
			allowNull: false,
			comment: "null"
		}
	}, {
		tableName: 'auth_types',
		timestamps: false
	});
};
