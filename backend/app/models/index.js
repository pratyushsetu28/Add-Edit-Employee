const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

db.pending_emp_basic_details = 
require("./pending_emp_basic_details.js")(sequelize, Sequelize);

db.pending_emp_education_details = 
require("./pending_emp_education_details.js")(sequelize, Sequelize);

db.pending_emp_family_details = 
require("./pending_emp_family_details.js")(sequelize, Sequelize);

db.pending_emp_last5yrstay_details=
require("./pending_emp_last5yrstay_details.js")(sequelize, Sequelize);

db.pending_emp_pay_details=
require("./pending_emp_pay_details.js")(sequelize, Sequelize);

db.pending_emp_prev_exp_details=
require("./pending_emp_prev_exp_details.js")(sequelize, Sequelize);

db.pending_faculty_details=
require("./pending_faculty_details.js")(sequelize, Sequelize);

db.pending_user_address=
require("./pending_user_address.js")(sequelize, Sequelize);


db.pending_user_details=
require("./pending_user_details.js")(sequelize, Sequelize);

db.pending_user_other_details=
require("./pending_user_other_details.js")(sequelize, Sequelize);

db.auth_menu_detail = 
require("./auth_menu_detail.js")(sequelize, Sequelize);

db.auth_types = 
require("./auth_types.js")(sequelize, Sequelize);

db.deo_modules = 
require("./deo_modules.js")(sequelize, Sequelize);

db.departments = 
require("./departments.js")(sequelize, Sequelize);

db.designations = 
require("./designations.js")(sequelize, Sequelize);

db.emp_basic_details = 
require("./emp_basic_details.js")(sequelize, Sequelize);

db.emp_current_entry = 
require("./emp_current_entry.js")(sequelize, Sequelize);

db.emp_education_details = 
require("./emp_education_details.js")(sequelize, Sequelize);

db.emp_family_details = 
require("./emp_family_details.js")(sequelize, Sequelize);

db.emp_last5yrstay_details = 
require("./emp_last5yrstay_details.js")(sequelize, Sequelize);

db.emp_pay_details = 
require("./emp_pay_details.js")(sequelize, Sequelize);

db.emp_prev_exp_details = 
require("./emp_prev_exp_details.js")(sequelize, Sequelize);

db.emp_reject_reason = 
require("./emp_reject_reason.js")(sequelize, Sequelize);

db.emp_validation_details = 
require("./emp_validation_details.js")(sequelize, Sequelize);

db.faculty_details = 
require("./faculty_details.js")(sequelize, Sequelize);

db.reject_reason = 
require("./reject_reason.js")(sequelize, Sequelize);

db.user_address = 
require("./user_address.js")(sequelize, Sequelize);

db.user_auth_types = 
require("./user_auth_types.js")(sequelize, Sequelize);

db.user_card_details = 
require("./user_card_details.js")(sequelize, Sequelize);

db.user_details = 
require("./user_details.js")(sequelize, Sequelize);

db.user_other_details = 
require("./user_other_details.js")(sequelize, Sequelize);

db.users = 
require("./users.js")(sequelize, Sequelize);

db.web_faculty_info = 
require("./web_faculty_info.js")(sequelize, Sequelize);


module.exports = db;
