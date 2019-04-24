
$("#academic-form").hide();
$("#work-form").hide();
$("#skills-form").hide();
$("#projects-form").hide();



$("#personal-btn").click(function(){
    $("#academic-form").show();
  $("#personal-form").hide();
  
});


$("#prev-personal-btn").click(function(){
    $("#academic-form").hide();
  $("#personal-form").show();
  
});

$("#academic-btn").click(function(){
    $("#academic-form").hide();
  $("#work-form").show();
  
});


$("#prev-academic-btn").click(function(){
    $("#academic-form").show();
    $("#work-form").hide();
  
});



$("#work-btn").click(function(){
    $("#skills-form").show();
    $("#work-form").hide();
  
});

$("#prev-work-btn").click(function(){
    $("#skills-form").hide();
    $("#work-form").show();
  
});


$("#skills-btn").click(function(){
    $("#skills-form").hide();
    $("#projects-form").show();
  
});

$("#prev-skills-btn").click(function(){
    $("#projects-form").hide();
    $("#skills-form").show();
  
});



$(document).ready(function() {
    var max_fields      = 10;
    var wrapper         = $(".input_academicfields_wrap"); 
    var add_button      = $(".add_academicfield_button"); 

    var x = 1; 
    $(add_button).click(function(e){ 
        e.preventDefault();
        if(x < max_fields){ 
            x++;
            $(wrapper).append('<p>Another Academic Details</p>  <label for="degree" class="form-label required">Degree</label><input type="text" name="Degree" id="degree" /><label for="university" class="form-label required">University</label><input type="text" name="University" id="university" /><label for="cgpa" class="form-label required">CGPA</label><input type="number" name="CGPA" id="cgpa" /><label for="year" class="form-label required">Year</label><input type="number" min="2000" max="2099" step="1" value="Year" id="year" /><br>'); 
        }
  
    });
   

});

$(document).ready(function() {
    var max_fields      = 10;
    var wrapper         = $(".input_workfields_wrap"); 
    var add_button      = $(".add_workfield_button"); 

    var x = 1; 
    $(add_button).click(function(e){ 
        e.preventDefault();
        if(x < max_fields){ 
            x++;
            $(wrapper).append('<p>Another Experience Details</p><label for="Designation" class="form-label required">Designation</label><input type="text" name="Designation" id="designation" /><label for="cgpa" class="form-label required">From</label><input type="date" name="From" id="cgpa" /><label for="year" class="form-label required">To</label> <input type="date" name="To" id="year" /><label for="company" class="form-label required">Company</label><input type="text" name="Company" id="company" /><br>'); 
        }
  
    });
   

});


$(document).ready(function() {
    var max_fields      = 10;
    var wrapper         = $(".input_skillfields_wrap"); 
    var add_button      = $(".add_skillfield_button"); 

    var x = 1; 
    $(add_button).click(function(e){ 
        e.preventDefault();
        if(x < max_fields){ 
            x++;
            $(wrapper).append('<p>Another Skill Details</p> <label for="Skill Name" class="form-label required">Skill Name</label> <input type="text" name="Skill Name" id="skillName" /><label for="company" class="form-label required">Company</label><input type="text" name="Company" id="company" /> <label for="Experience" class="form-label required">Experience</label><input type="number" name="Experience" id="experience" /><label for="Rating" class="form-label required">Rating</label><p class="page-header">10 is good, 1 is bad (i.e., "How much you rate yourselves right now?")</p><input type="number" name="Rating" id="rating" /><br>'); 
        }
  
    });
   

});


$(document).ready(function() {
    var max_fields      = 10;
    var wrapper         = $(".input_projectfields_wrap"); 
    var add_button      = $(".add_projectfield_button"); 

    var x = 1; 
    $(add_button).click(function(e){ 
        e.preventDefault();
        if(x < max_fields){ 
            x++;
            $(wrapper).append('<p>Another Project Details</p>  <label class="form-label required">Project Name</label><input type="text" name="Project Name" id="proName" /><label for="Description" class="form-label required">Description</label><input type="text" name="Description" id="description" /><label for="cgpa" class="form-label required">From</label><input type="date" name="From" id="cgpa" /><label for="year" class="form-label required">To</label><input type="date" name="To" id="year" /><label for="Technology" class="form-label required">Technology Used</label><input type="text" name="Technology" id="technology" /><label for="Role" class="form-label required">Your Role</label><input type="text" name="Role" id="role" /><br>'); 
        }
  
    });
   

});


  

// (function() {
//     $("#personal-btn").click(function() {
//       var userf = $("#first_name").val();
//       var userl = $("#last_name").val();
//       var eml = $("#email").val();
//       var phone = $("#phone").val();
//       var addr = $("#address").val();
//       var city = $("#city").val();
//       var state = $("#state").val();
//       var pin = $("#pincode").val();


//       console.log(userf);
//       console.log(userl);
//       console.log(eml);
//       console.log(phone);
//       console.log(addr);
//       console.log(city);
//       console.log(state);
//       console.log(pin);
  
//      add(userf, userl, eml, phone, addr , city, state, pin);
//     });
//   })();
  
//   function add(userf, userl, eml, phone, addr , city, state, pin) {
//     $.ajax({
       
//       url: "http://localhost:3000/personal",
//       method: "POST",
//       data: JSON.stringify({
//         firstName: userf,
//         lastName: userl,
//         email: eml,
//         mobile: phone,
//         Address: addr,
//         City: city,
//         State: state,
//         Pincode: pin
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8"
//       }
//     });
//   }



// (function() {
//     $("#academic-btn").click(function() {
//       var degr = $("#degree").val();
//       var clg = $("#university").val();
//       var grade = $("#cgpa").val();
//       var year = $("#year").val();
      


//       console.log(degr);
//       console.log(clg);
//       console.log(grade);
//       console.log(year);
    
//      addA(degr,clg,grade,year);
//     });
//   })();
  
//   function addA(degr,clg,grade,year) {
//     $.ajax({
       
//       url: "http://localhost:3000/academic",
//       method: "POST",
//       data: JSON.stringify({
//         Degree: degr,
//         University: clg,
//         CGPA: grade,
//         Year: year
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8"
//       }
//     });
//   }


(function() {
    $("#work-btn").click(function() {
      var desg = $("#designation").val();
      var from = $("#swyear").val();
      var to = $("#ewyear").val();
      var comp = $("#company").val();

      console.log(desg);
    
     addW(desg,from,to,comp);
    });
  })();
  
  function addW(desg,from,to,comp) {
    $.ajax({
       
      url: "http://localhost:3000/work",
      method: "POST",
      data: JSON.stringify({
        Designation: desg,
        From: from,
        To: to,
        Company: comp
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  }



(function() {
    $("#skills-btn").click(function() {
      var sname = $("#skillName").val();
      var scomp = $("#scompany").val();
      var exp = $("#experince").val();
      var rate = $("#rating").val();
      

     addS(sname,scomp,exp,rate);
    });
  })();
  
  function addS(sname,scomp,exp,rate) {
    $.ajax({
       
      url: "http://localhost:3000/skills",
      method: "POST",
      data: JSON.stringify({
       Name: degr,
       Company: scomp,
        Experience: exp,
        Rating: rate
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  }




// for project addition

(function() {
    $("#project-btn").click(function() {
      var pname = $("#proName").val();
      var desc = $("#description").val();
      var syear = $("#syear").val();
      var eyear = $("#eyear").val();
      var tech = $("#technology").val();
      var role = $("#role").val();
      
      console.log(pname,desc,syear,eyear,tech,role);
    
     addP(pname,desc,syear,eyear,tech,role);
    });
  })();
  
  function addP(pname,desc,syear,eyear,tech,role) {
    $.ajax({
       
      url: "http://localhost:3000/project",
      method: "POST",
      data: JSON.stringify({
        Project_Name: pname,
        Description: desc,
        From: syear,
        To: eyear,
        Technology: tech,
        Role: role

      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  }