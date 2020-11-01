/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('emp_pay_details', {
		'emp_no': {
			type: DataTypes.STRING(12),
			allowNull: false,
			primaryKey: true,
			comment: "null",
			references: {
				model: 'emp_basic_details',
				key: 'emp_no'
			}
		},
		'pay_code': {
			type: DataTypes.STRING(20),
			allowNull: false,
			comment: "null"
		},
		'basic_pay': {
			type: DataTypes.BIGINT,
			allowNull: false,
			comment: "null"
		}
	}, {
		tableName: 'emp_pay_details',
		timestamps: false
	});
};
