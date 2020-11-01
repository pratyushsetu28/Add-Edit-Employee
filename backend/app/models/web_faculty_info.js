/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('web_faculty_info', {
		'emp_no': {
			type: DataTypes.STRING(255),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'salutation': {
			type: DataTypes.STRING(5),
			allowNull: false,
			comment: "null"
		},
		'first_name': {
			type: DataTypes.STRING(150),
			allowNull: false,
			comment: "null"
		},
		'middle_name': {
			type: DataTypes.STRING(150),
			allowNull: true,
			comment: "null"
		},
		'last_name': {
			type: DataTypes.STRING(150),
			allowNull: true,
			comment: "null"
		},
		'dept_name': {
			type: DataTypes.STRING(250),
			allowNull: false,
			comment: "null"
		},
		'designation': {
			type: DataTypes.STRING(250),
			allowNull: false,
			comment: "null"
		},
		'type': {
			type: DataTypes.STRING(100),
			allowNull: false,
			comment: "null"
		},
		'photopath': {
			type: DataTypes.STRING(200),
			allowNull: false,
			comment: "null"
		},
		'email': {
			type: DataTypes.STRING(150),
			allowNull: false,
			comment: "null"
		},
		'mobile_no': {
			type: DataTypes.BIGINT,
			allowNull: false,
			comment: "null"
		},
		'office_no': {
			type: DataTypes.STRING(50),
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
		'research_interest': {
			type: DataTypes.TEXT,
			allowNull: false,
			comment: "null"
		},
		'per_page': {
			type: DataTypes.STRING(255),
			allowNull: true,
			comment: "null"
		},
		'cv_path': {
			type: DataTypes.STRING(255),
			allowNull: false,
			comment: "null"
		},
		'cv_date_time': {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			comment: "null"
		},
		'pub_path': {
			type: DataTypes.STRING(255),
			allowNull: false,
			comment: "null"
		},
		'pub_date_time': {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			comment: "null"
		}
	}, {
		tableName: 'web_faculty_info',
		timestamps: false
	});
};
