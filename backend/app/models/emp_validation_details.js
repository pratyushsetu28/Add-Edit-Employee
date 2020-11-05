/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('emp_validation_details', {
		'emp_no': {
			type: DataTypes.STRING(12),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'profile_pic_status': {
			type: DataTypes.STRING(10),
			allowNull: false,
			comment: "null"
		},
		'basic_details_status': {
			type: DataTypes.STRING(10),
			allowNull: false,
			comment: "null"
		},
		'prev_exp_status': {
			type: DataTypes.STRING(10),
			allowNull: false,
			comment: "null"
		},
		'family_details_status': {
			type: DataTypes.STRING(10),
			allowNull: false,
			comment: "null"
		},
		'educational_status': {
			type: DataTypes.STRING(10),
			allowNull: false,
			comment: "null"
		},
		'stay_status': {
			type: DataTypes.STRING(10),
			allowNull: false,
			comment: "null"
		},
		'send_mail': {
			type: DataTypes.STRING(20),
			allowNull: true,
			comment: "null"
		},
		'remark_1': {
			type: DataTypes.STRING(20),
			allowNull: true,
			comment: "null"
		},
		'created_date': {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		}
	}, {
		tableName: 'emp_validation_details',
		timestamps: false
	});
};
