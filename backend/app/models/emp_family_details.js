/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('emp_family_details', {
		'emp_no': {
			type: DataTypes.STRING(11),
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
		'name': {
			type: DataTypes.STRING(250),
			allowNull: false,
			comment: "null"
		},
		'relationship': {
			type: DataTypes.STRING(20),
			allowNull: false,
			comment: "null"
		},
		'profession': {
			type: DataTypes.STRING(150),
			allowNull: false,
			comment: "null"
		},
		'present_post_addr': {
			type: DataTypes.STRING(200),
			allowNull: false,
			comment: "null"
		},
		'photopath': {
			type: DataTypes.STRING(150),
			allowNull: false,
			comment: "null"
		},
		'dob': {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: "null"
		},
		'active_inactive': {
			type: DataTypes.STRING(10),
			allowNull: false,
			comment: "null"
		},
		'emp_dep_allergy': {
			type: DataTypes.STRING(30),
			allowNull: true,
			comment: "null"
		},
		'emp_dep_disease': {
			type: DataTypes.STRING(30),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'emp_family_details',
		timestamps: false
	});
};
