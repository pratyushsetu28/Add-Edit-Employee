/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pending_emp_basic_details', {
		'emp_no': {
			type: DataTypes.STRING(12),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'auth_id': {
			type: DataTypes.STRING(10),
			allowNull: false,
			comment: "null"
		},
		'designation': {
			type: DataTypes.STRING(11),
			allowNull: false,
			comment: "null"
		},
		'office_no': {
			type: DataTypes.BIGINT,
			allowNull: true,
			comment: "null"
		},
		'fax': {
			type: DataTypes.BIGINT,
			allowNull: true,
			comment: "null"
		},
		'joining_date': {
			type: DataTypes.DATEONLY,
			allowNull: false,
			comment: "null"
		},
		'retirement_date': {
			type: DataTypes.DATEONLY,
			allowNull: false,
			comment: "null"
		},
		'employment_nature': {
			type: DataTypes.STRING(150),
			allowNull: false,
			comment: "null"
		}
	}, {
		tableName: 'pending_emp_basic_details',
		timestamps: false
	});
};
