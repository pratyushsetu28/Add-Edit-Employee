module.exports = app => {
    const add_employee = require("../controllers/add_employee.controller.js");
  
    var router = require("express").Router();
    
    // Create a new Tutorial
    //router.post("/", add_employee.create);
    router.post("/add-employee" ,add_employee.check );
    router.post("/add-employee-basic-details",add_employee.emp_basic_details);
    router.post("/add-employee-previous-employment-details",add_employee.emp_prev_emp_details);
    router.post("/add-employee-previous-stay-details" ,add_employee.emp_prev_stay_details );
    router.post("/add-employee-educational-qualifications",add_employee.emp_educational_qualification );
    router.post("/add-employee-dependent-family-members-details",add_employee.emp_family_details);
    /*



/add-employee-dependent-family-members-details : family membeers
*/
    // Retrieve all Tutorials
    /*
    router.get("/", tutorials.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tutorials.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);
  
    // Delete all Tutorials
    router.delete("/", tutorials.deleteAll);
  */
    app.use('/api/add-edit-employee', router);
  };
  