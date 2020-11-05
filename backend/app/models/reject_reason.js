/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('reject_reason', {
		'id': {
			type: STRING(15),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'emp_no': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'reason': {
			type: DataTypes.STRING(300),
			allowNull: true,
			comment: "null"
		},
		'rejected_by': {
			type: DataTypes.STRING(300),
			allowNull: true,
			comment: "null"
		},
		'pic': {
			type: DataTypes.STRING(250),
			allowNull: true,
			comment: "null"
		},
		'created_date': {
			type: STRING(150),
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			comment: "null"
		}
	}, {
		tableName: 'reject_reason',
		timestamps: false
	});
};
