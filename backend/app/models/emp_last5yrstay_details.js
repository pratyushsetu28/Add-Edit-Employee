/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('emp_last5yrstay_details', {
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
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true,
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
		'res_addr': {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: "null"
		},
		'dist_hq_name': {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: "null"
		}
	}, {
		tableName: 'emp_last5yrstay_details',
		timestamps: false
	});
};
