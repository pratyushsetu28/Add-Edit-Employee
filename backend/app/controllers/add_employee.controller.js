const db = require("../models");

const pending_emp_basic_details= db.pending_emp_basic_details ;

const pending_emp_education_details =  db.pending_emp_education_details; 
const pending_emp_family_details = db.pending_emp_family_details ;
const pending_emp_last5yrstay_details = db.pending_emp_last5yrstay_details;
const pending_emp_pay_details = db.pending_emp_pay_details;
const pending_emp_prev_exp_details = db.pending_emp_prev_exp_details;
const pending_faculty_details = db.pending_faculty_details;
const pending_user_address=db.pending_user_address;
const pending_user_details = db.pending_user_details;
const pending_user_other_details = db.pending_user_other_details

const Op = db.Sequelize.Op;

//create and add a new employee
exports.create = (req, res) => {
  
    // Create pending_emp_details
    const PendingEmpBasicDetails = req.body.pending_emp_basic_details;
    const PendingEmpEducationDetails=req.body.pending_emp_education_details;
    const PendingEmpFamilyDetails = req.body.pending_emp_family_details;
    const PendingEmpLast5yrstayDetails = req.body.pending_emp_last5yrstay_details;
    const PendingEmpPayDetails = req.body.pending_emp_pay_details;
    const PendingEmpPrevExpDetails=req.body.pending_emp_prev_exp_details;
    const PendingFacultyDetails = req.body.pending_faculty_details;
    const PendingUserAddress = req.body.pending_user_address;
    const PendingUserDetails = req.body.pending_user_details;
    const PendingUserOtherDetails = req.body.pending_user_other_details;
   

    // Save pending_emp_details
    //save pending_emp_basic_details
    
    
    pending_emp_basic_details.create(PendingEmpBasicDetails)
      
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the pending_emp_basic_details."
        });
      });
      tempdb.push
    
      //save pending_emp_education_details
     
        
    pending_emp_education_details.bulkCreate(PendingEmpEducationDetails)
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the pending_emp_education_details."+i
        });
      });

       //save pending_emp_family_details
       
       
      pending_emp_family_details.bulkCreate(PendingEmpFamilyDetails)
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the pending_emp_family_details."+i
        });
      });

      //save pending_emp_last5yrstay_details
     
        pending_emp_last5yrstay_details.bulkCreate(PendingEmpLast5yrstayDetails)
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the pending_emp_last5yr_salary."
          });
        });
          
        

      //save pending_emp_pay_details
      pending_emp_pay_details.create(PendingEmpPayDetails)
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the pending_emp_pay_details."
        });
      });
      
      //save pending_emp_prev_exp_details
    
            pending_emp_prev_exp_details.bulkCreate(PendingEmpPrevExpDetails)
            .catch(err => {
              res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the pending_emp_prev_exp_details."
              });
            });
    
      // save pending_faculty_details
      pending_faculty_details.create(PendingFacultyDetails)
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the pending_faculty_details."
        });
      });

      // save pending_user_address
      pending_user_address.create(PendingUserAddress)
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the pending_user_address."
        });
      });
      
     //save  pending_user_details
     pending_user_details.create(PendingUserDetails)
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while creating the pending_user_details."
       });
     });

     // save pending_user_other_details
     pending_user_other_details.create(PendingUserOtherDetails)
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while creating the pending_user_other_details."
       });
     });

     //res.json(tempdb);
     

  };
