/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('deo_modules', {
		'id': {
			type: DataTypes.STRING(11),
			allowNull: false,
			primaryKey: true,
			comment: "null",
			references: {
				model: 'users',
				key: 'id'
			}
		},
		'module_id': {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		}
	}, {
		tableName: 'deo_modules',
		timestamps: false
	});
};
