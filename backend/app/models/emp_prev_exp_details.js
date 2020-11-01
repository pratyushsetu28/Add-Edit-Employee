/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('emp_prev_exp_details', {
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
		'sno': {
			type: DataTypes.INTEGER,
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
			type: DataTypes.DATEONLY,
			allowNull: false,
			comment: "null"
		},
		'to': {
			type: DataTypes.DATEONLY,
			allowNull: false,
			comment: "null"
		},
		'pay_scale': {
			type: DataTypes.STRING(20),
			allowNull: false,
			comment: "null"
		},
		'address': {
			type: DataTypes.TEXT,
			allowNull: false,
			comment: "null"
		},
		'remarks': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'emp_prev_exp_details',
		timestamps: false
	});
};
