/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('emp_reject_reason', {
		'emp_no': {
			type: DataTypes.STRING(12),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'step': {
			type: DataTypes.INTEGER,
			allowNull: false,
			comment: "null"
		},
		'reason': {
			type: DataTypes.STRING(100),
			allowNull: false,
			comment: "null"
		},
		'created_date': {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true,
			comment: "null"
		}
	}, {
		tableName: 'emp_reject_reason',
		timestamps: false
	});
};
