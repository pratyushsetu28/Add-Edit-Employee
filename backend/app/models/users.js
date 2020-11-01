/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('users', {
		'id': {
			type: DataTypes.STRING(250),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'password': {
			type: DataTypes.STRING(150),
			allowNull: true,
			comment: "null"
		},
		'auth_id': {
			type: DataTypes.STRING(10),
			allowNull: false,
			comment: "null",
			references: {
				model: 'auth_types',
				key: 'id'
			}
		},
		'created_date': {
			type: DataTypes.DATE,
			allowNull: false,
			comment: "null"
		},
		'status': {
			type: DataTypes.ENUM('A','D'),
			allowNull: false,
			defaultValue: 'A',
			comment: "null"
		},
		'remark': {
			type: DataTypes.STRING(100),
			allowNull: false,
			comment: "null"
		}
	}, {
		tableName: 'users',
		timestamps: false
	});
};
