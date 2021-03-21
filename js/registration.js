'use strict';

// let forminfo = document.getElementsByClassName('form');
let counterforallcources= 0 ;
let EnglishCourse = 0 ;
let SpanishCourse = 0 ;
let GermanCourse = 0 ;
let ArabicCourse = 0 ;
let ItalianCourse = 0 ;
let ChineseCourse = 0 ;

let forminfo =document.getElementById('form-info');
forminfo.addEventListener('submit' , getstudentinfo); // event handler
//get ids  :
 let countainer = document.getElementById('container');
let stdollist  = document.getElementById('stdlist');
 // constructor:
function Courses (FirstName ,LastName , NativeLanguage, Gender ,EmailAddres ,PhoneNumber,Course){
this.FirstName = FirstName;
this.LastName = LastName ;
this.NativeLanguage = NativeLanguage;
this.Gender = Gender;
this.EmailAddres = EmailAddres;
this.PhoneNumber = PhoneNumber;
this.Course = Course;
Courses.std.push(this);
localStorage.setItem('students' ,JSON.stringify(Courses.std));
}
Courses.std = []; // global arr

function getstudentinfo(event){ //event handler 
  event.preventDefault();
  // get values from the form :
  
  let FirstName =event.target.FirstName.value;
  let LastName =event.target.LastName.value;
  let NativeLanguage = event.target.NativeLanguage.value;
  let Gender =event.target.Gender.value;
  let EmailAddres =event.target.EmailAddress.value;
  let PhoneNumber =event.target.PhoneNumber.value;
  let Course = event.target.Course.value;
  console.log(Course);
  //// to get counter for each cource : 
  if (Course === 'English'){
      EnglishCourse+=1 ;
  }else if (Course === 'German'){
      GermanCourse+=1 ;
  }else if (Course === 'Arabic'){
     ArabicCourse+=1 ;
  }else if (Course === 'Italian'){
     ItalianCourse+=1 ;
  }else if (Course === 'Chinese'){
    ChineseCourse+=1 ;
  }else if (Course === 'Spanish'){
    SpanishCourse+=1 ;
  }else{
    console.log('there is no course with  this name');
  }
  console.log(EnglishCourse);
  ///////////////////
  //////////////////////////////////////////////////
  new Courses(FirstName ,LastName , NativeLanguage,Gender ,EmailAddres ,PhoneNumber,Course);
} //  end of handler


//FUNCTION GET INFO
let studentsarray=[]; // all students array from local storage 
function infofromthestorage (){
  let data =localStorage.getItem('students');
   if(data){
   let objectsarr =JSON.parse(data);
  for(let i = 0 ; i<objectsarr.length ; i++){ 
   let newstudent = new Courses(objectsarr[i].FirstName , objectsarr[i].LastName , objectsarr[i].NativeLanguage, objectsarr[i].Gender,objectsarr[i].EmailAddres ,objectsarr[i].PhoneNumber,objectsarr[i].Course);
   studentsarray.push(newstudent);
     render();
  }
  //console.log(studentsarray);
  
}
}
infofromthestorage();


//function render 
function render (){
  counterforallcources++;
  //console.log(studentsarray);
 for (let i= 0 ; i <Courses.std.length ; i++ ){
 let newstd =document.createElement('li');
 newstd.textContent = `Stduent name is ${Courses.std[i].FirstName} and student numbers ${counterforallcources}`;
  stdollist.appendChild(newstd);//ol
   }
  countainer.appendChild(stdollist);//section
}



