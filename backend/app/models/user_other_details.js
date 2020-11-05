/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user_other_details', {
		'id': {
			type: DataTypes.STRING(12),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'religion': {
			type: DataTypes.STRING(100),
			allowNull: false,
			comment: "null"
		},
		'nationality': {
			type: DataTypes.STRING(100),
			allowNull: false,
			comment: "null"
		},
		'kashmiri_immigrant': {
			type: DataTypes.STRING(10),
			allowNull: false,
			comment: "null"
		},
		'hobbies': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'fav_past_time': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'birth_place': {
			type: DataTypes.STRING(150),
			allowNull: false,
			comment: "null"
		},
		'mobile_no': {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: "null"
		},
		'father_name': {
			type: DataTypes.STRING(150),
			allowNull: false,
			comment: "null"
		},
		'mother_name': {
			type: DataTypes.STRING(150),
			allowNull: false,
			comment: "null"
		},
		'emp_allergy': {
			type: DataTypes.STRING(30),
			allowNull: true,
			comment: "null"
		},
		'emp_disease': {
			type: DataTypes.STRING(30),
			allowNull: true,
			comment: "null"
		},
		'bank_name': {
			type: DataTypes.STRING(60),
			allowNull: true,
			comment: "null"
		},
		'bank_accno': {
			type: DataTypes.STRING(30),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'user_other_details',
		timestamps: false
	});
};
