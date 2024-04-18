"use strict";

// AGE VALIDATION FUNCTION
// Define a function named validateAge with two parameters: dob and age
const validateAge = (dob, age) => {
  
  // Get the current date
  const today = new Date();

  // Convert the date of birth string into a Date object
  const birthDate = new Date(dob);

  // Calculate the age based on the current year and the birth year
  let calculatedAge = today.getFullYear() - birthDate.getFullYear();

  // Calculate the difference in months between the current month and the birth month
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // Check if the birth month is later than the current month or if the birth month
  // is the same but the birth day is later than the current day
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    // If true, decrement the calculated age by 1
    calculatedAge--;
  }

  // Check if the provided age matches the calculated age
  // or if the provided age is an empty string
  return age === "" || age == calculatedAge;
};


const submitForm = function () {
  
//   Get user data from the form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const emergencyContact = document.getElementById("emergencyContact").value;
  const age = document.getElementById("age").value;
  const dob = document.getElementById("dob").value;
  const phone = document.getElementById("phone").value;
  const gender = document.getElementById("gender").value;
  const ethnicity = document.getElementById("ethnicity").value;
  const education = document.getElementById("education").value;
  const occupation = document.getElementById("occupation").value;
  const income = document.getElementById("income").value;
  const maritalStatus = document.getElementById("maritalStatus").value;
  const householdMembers = document.getElementById("householdMembers").value;
  const children = document.getElementById("children").value;


 
  //FORM VALIDATION BEGINS
  //--------------------------------------------------------------------
  //--------------------------------------------------------------------

   // Validate age
  if (!validateAge(dob, age)) {
    const dobError = document.getElementById("dobError");
    dobError.textContent =
      "The entered age does not match with the Date of Birth (DOB). Enter appropriate age for DOB";
    dobError.scrollIntoView({ behavior: "smooth" });
    return;
  } else {
    document.getElementById("dobError").innerText = "";
  }

  // Simple validation for other required fields. Checks if any of the fields are empty.
  if (
    name === "" ||
    email === "" ||
    address === "" ||
    emergencyContact === "" ||
    dob === ""
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  //--------------------------------------------------------------------
  //--------------------------------------------------------------------
  //FORM VALIDATION ENDS

  //  STEP 3: Create a JSON object from the form data.
  const userData = {
    name: name,
    email: email,
    address: address,
    emergencyContact: emergencyContact,
    age: age,
    dob: dob,
    phone: phone,
    gender: gender,
    ethnicity: ethnicity,
    education: education,
    occupation: occupation,
    income: income,
    maritalStatus: maritalStatus,
    householdMembers: householdMembers,
    children: children
  };



  //STEP 3, BULLET 3: Log out the JSON data
  console.log("Json data printed:", JSON.stringify(userData));

  //   Calling the result of mockAPI 
  const apiResult = mockAPI(userData);
  if (apiResult.result) {
    alert(apiResult.message);
  } else {
    const apiErrorMessageEl = document.getElementById("apiErrorMessage");
    apiErrorMessageEl.textContent = apiResult.message;
  }

  //   STEP 3: FIRST 3 BULLET POINTS
  //   Executing the postReqData function
  //   try {
  //     const response = await postReqData('myfunapi.fake/user/signup”', userData);
  //     console.log(response); // Handle the response data
  //   } catch (error) {
  //     console.error('Error:', error); // Handle errors
  //   }
  // }
};


 
  // Demonstrate the ability to make a POST request to a pretend API
  // “myfunapi.fake/user/signup” setting the JSON from above as the body of
  // the request (leave this commented out, as it doesn’t exist).

//   Making the POST request
//   async function postReqData(url='', data = {}) {
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   });
//   return response.json();
// }



// STEP 4: Create a mockAPI function that uses a fake library “UserHelper” to interact with the database, no direct SQL is used (the “documentation” for this fake library is included below).

const mockAPI = (userData) => {
  //     try {
  // //Utilize the “UserHelper” library to create a new user object
  // //Example: myUser= UserHelper.create();

  //         const newUser = userHelper.create();

  //         // Check if name and email data fields are provided
  //         if (!userData.name || !userData.email) {
  //             throw new Error('Name and email fields are required.');
  //         }

  // // Read all of the data out of the JSON, and set the data in the user object.

  //         const nameSetSuccessful = newUser.setName(userData.name);
  //         const emailSetSuccessful = newUser.setEmail(userData.email);
  //         const addressSetSuccessful = newUser.setAddress(userData.address);
  //         const phoneSetSuccessful = userData.phone ? newUser.setPhone(userData.phone) : true; // Handle optional phone
  //         const emergencyContactSetSuccessful = newUser.setEmergencyContact(userData.emergencyContact);
  //         const ageSetSuccessful = newUser.setAge(userData.age);
  //         const dobSetSuccessful = newUser.setDob(userData.dob);
  //         const genderSetSuccessful = newUser.setGender(userData.gender);
  //         const ethnicitySetSuccessful = newUser.setEthnicity(userData.ethnicity);
  //         const educationSetSuccessful = newUser.setEducation(userData.education);
  //         const occupationSetSuccessful = newUser.setOccupation(userData.occupation);
  //         const incomeSetSuccessful = newUser.setIncome(userData.income);
  //         const maritalStatusSetSuccessful = newUser.setMaritalStatus(userData.maritalStatus);
  //         const householdMembersSetSuccessful = newUser.setHouseholdMembers(userData.householdMembers);
  //         const childrenSetSuccessful = newUser.setChildren(userData.children);

  //       //Utilize the “UserHelper” library to save the object. Account for any errors appropriately and similar to above.
  //         const saveSuccessful = userHelper.save();

  // // If there was success, return a descriptive message and a result of true indicating success.

  //         if (nameSetSuccessful && emailSetSuccessful && addressSetSuccessful && phoneSetSuccessful &&
  //             emergencyContactSetSuccessful && ageSetSuccessful && dobSetSuccessful &&
  //             genderSetSuccessful && ethnicitySetSuccessful && educationSetSuccessful &&
  //             occupationSetSuccessful && incomeSetSuccessful && maritalStatusSetSuccessful &&
  //             householdMembersSetSuccessful && childrenSetSuccessful && saveSuccessful) {

  // //Mock API will return a JSON object with two members, ‘message’ and ‘result’.
  //             return {
  //                 message: 'User created successfully',
  //                 result: true
  //             };
  //         } else {
  //             throw new Error('Failed to save user');
  //         }
  //     } catch (error) {
  //         // Return error message and result

  // // Mock API will return a JSON object with two members, ‘message’ and ‘result’.
  //         return {
  //             message: error.message,
  //             result: false
  //         };
  //     }

//Comment out all of the above code, and simply return an object indicating success so that the code will run.

  return {
    message: "User created successfully",
    result: true
  };
};


