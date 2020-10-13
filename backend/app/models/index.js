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



module.exports = db;
