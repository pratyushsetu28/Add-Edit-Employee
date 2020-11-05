/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('faculty_details', {
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
		'research_interest': {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: "null"
		}
	}, {
		tableName: 'faculty_details',
		timestamps: false
	});
};
