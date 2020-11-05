/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pending_emp_pay_details', {
		'emp_no': {
			type: DataTypes.STRING(12),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'pay_code': {
			type: DataTypes.STRING(20),
			allowNull: false,
			comment: "null"
		},
		'grade_pay': {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: "null"
		},
		'basic_pay': {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: "null"
		}
	}, {
		tableName: 'pending_emp_pay_details',
		timestamps: false
	});
};
