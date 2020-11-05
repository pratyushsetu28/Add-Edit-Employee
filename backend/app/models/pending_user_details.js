/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pending_user_details', {
		'id': {
			type: DataTypes.STRING(12),
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
		'sex': {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: "null"
		},
		'category': {
			type: DataTypes.STRING(10),
			allowNull: false,
			comment: "null"
		},
		'allocated_category': {
			type: DataTypes.STRING(10),
			allowNull: false,
			comment: "null"
		},
		'dob': {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: "null"
		},
		'email': {
			type: DataTypes.STRING(150),
			allowNull: false,
			comment: "null"
		},
		'photopath': {
			type: DataTypes.STRING(150),
			allowNull: true,
			comment: "null"
		},
		'signature': {
			type: DataTypes.STRING(150),
			allowNull: true,
			comment: "null"
		},
		'marital_status': {
			type: DataTypes.STRING(20),
			allowNull: false,
			comment: "null"
		},
		'physically_challenged': {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: "null"
		},
		'dept_id': {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: "null"
		},
		
		
		'updated': {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			comment: "null"
		}
	}, {
		tableName: 'pending_user_details',
		timestamps: false
	});
};
