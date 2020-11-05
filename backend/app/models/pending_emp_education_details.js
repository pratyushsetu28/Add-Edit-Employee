/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pending_emp_education_details', {
		'emp_no': {
			type: DataTypes.STRING(12),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'sno': {
			type: DataTypes.INTEGER,
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
			type: DataTypes.STRING(20),
			allowNull: false,
			comment: "null"
		},
		'grade': {
			type: DataTypes.STRING(4),
			allowNull: false,
			comment: "null"
		},
		'division': {
			type: DataTypes.STRING(20),
			allowNull: false,
			comment: "null"
		}
	}, {
		tableName: 'pending_emp_education_details',
		timestamps: false
	});
};
