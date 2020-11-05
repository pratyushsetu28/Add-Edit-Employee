/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('emp_basic_details', {
		'emp_no': {
			type: DataTypes.STRING(12),
			allowNull: false,
			primaryKey: true,
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
		'designation': {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: "null"
		},
		'office_no': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'fax': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'joining_date': {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: "null"
		},
		'retirement_ext': {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: "null"
		},
		'retirement_date': {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: "null"
		},
		'employment_nature': {
			type: DataTypes.STRING(150),
			allowNull: false,
			comment: "null"
		}
	}, {
		tableName: 'emp_basic_details',
		timestamps: false
	});
};
