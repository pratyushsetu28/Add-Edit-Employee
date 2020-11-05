/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('emp_current_entry', {
		'emp_no': {
			type: DataTypes.STRING(12),
			allowNull: false,
			defaultValue: '',
			primaryKey: true,
			comment: "null"
		},
		'curr_step': {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: "null"
		}
	}, {
		tableName: 'emp_current_entry',
		timestamps: false
	});
};
