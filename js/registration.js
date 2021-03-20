'use strict';

// get form info

const forminfo =document.getElementById('forminfo');
// array that hold all student objects



// constructor function

let engstdnum = 0;
function Courses (FirstName,LastName,Gender,EmailAddres,PhoneNumber,Course){
  this.FirstName =FirstName;
  this.LastName = LastName;
  this.Gender = Gender;
  this.EmailAddres =EmailAddres;
  this.PhoneNumber =PhoneNumber;
  this.studentnum = 0 ; // num for all courses
  this.coursestudentnum =0; // num for each sourse
  //this.Address =Address ;
  this.Course =Course;
  students.push(this); //global array
}
let students =[];



forminfo.addEventListener('submit', function (event){
  event.preventDefault();
  this.studentnum++;
  let FirstName =event.target.FirstName.value;
  let LastName =event.target.LastName.value;
  let Gender =event.target.Gender.value;
  let EmailAddres =event.target.EmailAddres.value;
  let PhoneNumber =event.target.PhoneNumber.value;
  //let Address =document.getElementById('textarea').value; let Address =document.getElementById('textarea').value;
  let Course =event.target.Course.value;
  // new object for each student
  new Courses(FirstName ,LastName ,Gender ,EmailAddres ,PhoneNumber,Course);

  let student = JSON.stringify(students);
  localStorage.setItem('students' ,student);
  /////
  //   let englishnum = document.getElementById('selectlist').selectedOptions[0].value;
  if (this.Course === 'English'){
    engstdnum++;
  }

});
console.log(this.Course);
console.log(students);

console.log(engstdnum);

// var getValue = document.getElementById('ddlViewBy').selectedOptions[0].value
// let arr  = [ 'Select','English', 'Spanish' ,'German' ,'Arabic' ,'Italian' ,'Chinese'];


