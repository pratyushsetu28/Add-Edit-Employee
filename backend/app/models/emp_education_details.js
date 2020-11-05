/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('emp_education_details', {
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
		'exam': {
			type: DataTypes.STRING(250),
			allowNull: false,
			comment: "null"
		},
		'specialization': {
			type: DataTypes.STRING(150),
			allowNull: false,
			comment: "null"
		},
		'institute': {
			type: DataTypes.STRING(250),
			allowNull: false,
			comment: "null"
		},
		'year': {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: "null"
		},
		'grade': {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: "null"
		},
		'division': {
			type: DataTypes.STRING(20),
			allowNull: false,
			comment: "null"
		}
	}, {
		tableName: 'emp_education_details',
		timestamps: false
	});
};
