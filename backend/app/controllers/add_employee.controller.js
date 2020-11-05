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

exports.check = (req,res) => {
    try{
          const emp_basic_details = db.emp_basic_details ; 
          emp_basic_details.count({where : { emp_no :req.body.employeeId}}).then(count=>{
          if (count === 0 ) {
              res.status(201).send(
                {
                 message : "success"
              }
              );
          }
          else {
            res.status(400).send({
                  message: "Employee id: " + req.body.employeeId + " already exist"
            }
            );
          }
        }
        )
      }   
     catch(err){
          console.log(project instanceof Project);
          res.status(500).send({
            message: err.message || "Service Unavailable"
        }
          );
     }
};


exports.emp_basic_details = (req,res) => {

    
  PendingEmpBasicDetails = 
    {
      emp_no: req.body.employeeId,
      auth_id: "1",
      designation: req.body.employmentDetails.designation,
      office_no: req.body.otherDetails.officeNo,
      fax: req.body.otherDetails.fax,
      joining_date: req.body.employmentDetails.dateOfJoining,
      retirement_date: req.body.employmentDetails.dateOfRetirement,
      employment_nature: req.body.employmentDetails.natureOfEmployment
  };

  PendingUserDetails =
  {
      id: req.body.employeeId,
      salutation: req.body.personalDetails.salutation,
      first_name: req.body.personalDetails. firstName,
      middle_name: req.body.personalDetails.middleName,
      last_name: req.body.personalDetails. lastName,
      sex: req.body.personalDetails.gender,
      category: req.body.personalDetails.category,
      allocated_category: req.body.personalDetails. firstName,
      dob: req.body.personalDetails.dob,
      email: req.body.otherDetails.email,
      photopath: req.body.personalDetails.photopath,
      signature : req.body.personalDetails.signature,
      marital_status: req.body.personalDetails.maritalStatus,
      physically_challenged:  req.body.personalDetails.physicallyChallenged,
      dept_id: req.body.employmentDetails.department,
      updated: "2018-09-29"
  };

  PendingEmpPayDetails = 
  {
    emp_no: req.body.employeeId,
    pay_code: req.body.salaryDetails.payBand,
    basic_pay: req.body.salaryDetails.basicPay,
    grade_pay: req.body.salaryDetails.gradePay
 };
 PendingFacultyDetails = 
  {
    emp_no: req.body.employeeId,
    research_interest: req.body.employmentDetails.researchInterest
  };
  PendingUserPresentAddress = 
  {
    id: req.body.employeeId,
    line1: req.body.addressDetails.presentAddressDetails.addressLine1,
    line2: req.body.addressDetails.presentAddressDetails.addressLine2,
    city:req.body.addressDetails.presentAddressDetails.city,
    state: req.body.addressDetails.presentAddressDetails.state,
    pincode: req.body.addressDetails.presentAddressDetails.pincode,
    country: req.body.addressDetails.presentAddressDetails.country,
    contact_no: req.body.addressDetails.presentAddressDetails.contact,
    type: "present"
};
PendingUserPermanantAddress = 
{
  id: req.body.employeeId,
  line1: req.body.addressDetails.permanentAddressDetails.addressLine1,
  line2: req.body.addressDetails.permanentAddressDetails.addressLine2,
  city:req.body.addressDetails.permanentAddressDetails.city,
  state: req.body.addressDetails.permanentAddressDetails.state,
  pincode: req.body.addressDetails.permanentAddressDetails.pincode,
  country: req.body.addressDetails.permanentAddressDetails.country,
  contact_no: req.body.addressDetails.permanentAddressDetails.contact,
  type: "permanant"
};
PendingUserOtherDetails = 
{
  id: req.body.employeeId,
  religion: req.body.personalDetails.religion,
  nationality: req.body.personalDetails.nationality,
  kashmiri_immigrant: req.body.personalDetails.kashmiriImmigrant,
  hobbies: req.body.otherDetails.hobbies,
  fav_past_time: req.body.otherDetails.favoritePastTime,
  birth_place: req.body.personalDetails.placeOfBirth,
  mobile_no: req.body.otherDetails.mobileNo,
  father_name: req.body.personalDetails.fatherName,
  mother_name: req.body.personalDetails.motherName,
  bank_name: req.body.bankDetails.bankName,
  bank_accno: req.body.bankDetails.accountNumber
}
  
  

                                                  

  
  
  pending_emp_basic_details.create(PendingEmpBasicDetails)
  .then (data =>  {
    
  }   
  )   
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the pending_emp_basic_details."
    });
  });  
  
  pending_user_details.create(PendingUserDetails)
  .then (data =>  {
    
  }   
  ) 
  .catch(err => {
    res.status(500).send({
      message:
        "Some error occurred while creating the pending_user_details."
    });
  });  
  
  pending_emp_pay_details.create(PendingEmpPayDetails)
  .then (data =>  {
    
  }   
  ) 
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the pending_emp_pay_details."
    });
  });  

  pending_faculty_details.create(PendingFacultyDetails)
  .then (data =>  {
    
  }   
  ) 
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the pending_faculty_details."
    });
  });  

  pending_user_address.create(PendingUserPresentAddress)
  .then (data =>  {
    
  }   
  ) 
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the pending_user_present_address."
    });
  });  

  pending_user_address.create(PendingUserPermanantAddress)
  .then (data =>  {
    
  }   
  ) 
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the pending_user_permanant_address."
    });
  });   

  pending_user_other_details.create(PendingUserOtherDetails)
  .then (data =>  {
  
  }   
  ) 
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the pending_user_other_details."
    });
  });  

 
  res.status(201).send({
    message : "success"
  });


  
};


exports.emp_prev_emp_details = (req,res) => {
    
    PendingEmpPrevExpDetails = []
    for ( var i in req.body.previousEmploymentDetails){
            p = req.body.previousEmploymentDetails[i];
            obj = 
            {
              emp_no: req.body.employeeId,
              sno: i,
              designation: p.positionHeld,
              from: p.from,
              to: p.to,
              pay_scale: p.payScale,
              address: p.fullAddressOfEmployer,
              remarks: p.remarks
          }
          PendingEmpPrevExpDetails.push(obj);
    }


    pending_emp_prev_exp_details.bulkCreate(PendingEmpPrevExpDetails)
    .then( data => { 
      res.status(201).send({
        message : "success"
      });
     }
    )
    
    
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the pending_emp_prev_exp_details."
      });
    });
  
    
  };
  


//create and add a new employee


exports.emp_prev_stay_details = (req,res)=> {

    PendingEmpPrevStayDetails = []
    for ( var i in req.body.previousStayDetails){
            p = req.body.previousStayDetails[i];
            obj = 
            {

                emp_no:  req.body.employeeId,
                sno: i,
                from: p.from,
                to: p.to,
                res_addr: p.residentialAddress,
                dist_hq_name: p.nameOfDistrictHeadquarters
          }
          PendingEmpPrevStayDetails.push(obj);
    }


    pending_emp_last5yrstay_details.bulkCreate(PendingEmpPrevStayDetails)
    .then( data => { 
      res.status(201).send({
        message : "success"
      });
     }
    )
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the pending_emp_last5yrstay_details."
      });
    });

    
};

exports.emp_educational_qualification = (req,res) => {
 
  PendingEmpEducationDetails = []
  for ( var i in req.body.educationalQualifications){
          p = req.body.educationalQualifications[i];
          obj = 
          {
            emp_no: req.body.employeeId,
            sno: i,
            exam: p.examination,
            specialization: p.course,
            institute: p.college,
            year: p.year,
            grade: p.grade,
            division: p.division
        }
        PendingEmpEducationDetails.push(obj);
  }


  pending_emp_education_details.bulkCreate(PendingEmpEducationDetails)
     .then( data => { 
       res.status(201).send({
         message : "success"
       });
      }
     )
    
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the pending_emp_education_details."
      });
  });

 
};


exports.emp_family_details = (req,res) => {

/*
  {
    employeeId: "",
    dependentFamilyMembers: [
        {
            name: "",
            relationship: "",
            dob: "",
            profession: "",
            activeOrInactive: "",
            presentPostalAddress: "",
            photograph: null
        }
    ]
}
*/
PendingEmpFamilyDetails = []
for ( var i in req.body.dependentFamilyMembers){
        p = req.body.dependentFamilyMembers[i];
        obj = 
        {
          emp_no: req.body.employeeId,
          sno: i,
          name: p.name,
          relationship: p.relationship,
          profession: p.profession,
          present_post_addr: p.presentPostalAddress,
          photopath: p.photograph,
          dob: p.dob,
          active_inactive: p.activeOrInactive,
          emp_dep_allergy: "FDfd",
          emp_dep_disease: "fddf"
      }
      PendingEmpFamilyDetails.push(obj);
};


pending_emp_family_details.bulkCreate(PendingEmpFamilyDetails)
.then( data => { 
  res.status(201).send({
    message : "success"
  });
 }
)
.catch(err => {
  res.status(500).send({
    message:
      err.message || "Some error occurred while creating the pending_emp_family_details."
  });
});



};
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
