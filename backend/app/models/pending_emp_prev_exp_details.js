/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pending_emp_prev_exp_details', {
		'emp_no': {
			type: DataTypes.STRING(12),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'sno': {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'designation': {
			type: DataTypes.STRING(100),
			allowNull: false,
			comment: "null"
		},
		'from': {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: "null"
		},
		'to': {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: "null"
		},
		'pay_scale': {
			type: DataTypes.STRING(20),
			allowNull: false,
			comment: "null"
		},
		'address': {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: "null"
		},
		'remarks': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'pending_emp_prev_exp_details',
		timestamps: false
	});
};
