/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pending_faculty_details', {
		'emp_no': {
			type: DataTypes.STRING(12),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'research_interest': {
			type: DataTypes.TEXT,
			allowNull: false,
			comment: "null"
		}
	}, {
		tableName: 'pending_faculty_details',
		timestamps: false
	});
};
