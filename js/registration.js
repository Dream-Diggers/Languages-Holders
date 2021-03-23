'use strict';

// // let forminfo = document.getElementsByClassName('form');
let EnglishCourse = parseInt(localStorage.getItem('EnglishCourse')) || 0 ;
let DutchCourse =parseInt(localStorage.getItem('DutchCourse')) || 0 ;
let GermanCourse = parseInt(localStorage.getItem('GermanCourse')) || 0 ;
let ArabicCourse = parseInt(localStorage.getItem('ArabicCourse')) || 0 ;
let ItalianCourse = parseInt(localStorage.getItem('ItalianCourse')) || 0 ;
let KoreanCourse = parseInt(localStorage.getItem('KoreanCourse')) || 0 ;
let TurkishCourse = parseInt(localStorage.getItem('TurkishCourse')) || 0 ;


localStorage.setItem('EnglishCourse', EnglishCourse);
localStorage.setItem('DutchCourse', DutchCourse);
localStorage.setItem('GermanCourse', GermanCourse);
localStorage.setItem('ArabicCourse', ArabicCourse);
localStorage.setItem('ItalianCourse', ItalianCourse);
localStorage.setItem('KoreanCourse', KoreanCourse);
localStorage.setItem('TurkishCourse', TurkishCourse);

let forminfo =document.getElementById('form-info');
// event handler
//get ids  :
// let countainer = document.getElementById('container');
// let stdollist  = document.getElementById('stdlist');
// constructor:
function Courses (FirstName ,LastName , NativeLanguage, Gender ,EmailAddres ,PhoneNumber,Course){
  this.FirstName = FirstName;
  this.LastName = LastName ;
  this.NativeLanguage = NativeLanguage;
  this.Gender = Gender;
  this.EmailAddres = EmailAddres;
  this.PhoneNumber = PhoneNumber;
  this.Course = Course;
  // counterforallcources++ ;
  Courses.std.push(this);
  localStorage.setItem('students' ,JSON.stringify(Courses.std));
}
Courses.std = []; // global arr
// console.log(Courses.std);
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

  new Courses(FirstName , LastName , NativeLanguage, Gender,EmailAddres ,PhoneNumber,Course);

  if (Course === 'English'){
    EnglishCourse+=1 ;
    localStorage.setItem('EnglishCourse', EnglishCourse);
  }else if (Course === 'German'){
    GermanCourse+=1 ;
    localStorage.setItem('GermanCourse', GermanCourse);
  }else if (Course === 'Arabic'){
    ArabicCourse+=1 ;
    localStorage.setItem('ArabicCourse', ArabicCourse);
  }else if (Course === 'Italian'){
    ItalianCourse+=1 ;
    localStorage.setItem('ItalianCourse', ItalianCourse);
  }else if (Course === 'Korean'){
    KoreanCourse+=1 ;
    localStorage.setItem('KoreanCourse', KoreanCourse);
  }else if (Course === 'Turkish'){
    TurkishCourse+=1 ;
    localStorage.setItem('TurkishCourse', TurkishCourse);
  }else if (Course === 'Dutch'){
    DutchCourse+=1 ;
    localStorage.setItem('DutchCourse', DutchCourse);
  }else{
    console.log('there is no course with  this name');
  }

  let newstd=document.createElement('li');
  newstd.textContent = `Stduent name is ${FirstName} ${LastName}  and student number is ${Courses.std.length}`;
  // stdollist.appendChild(newstd);//ol
}

function render (){

  let renderCnt=1;
  for (let i= 0 ; i <Courses.std.length ; i++ ){
    console.log(Courses.std);
    let newstd =document.createElement('li');
    newstd.textContent = `Stduent name is ${Courses.std[i].FirstName} ${Courses.std[i].LastName}  and student number is ${renderCnt}`;
    // stdollist.appendChild(newstd);//ol
    renderCnt++;
  }
  // countainer.appendChild(stdollist);//section
}
console.log(localStorage.students);



function getdata(){
  if (localStorage.students){
    let data=localStorage.getItem('students');
    let date=JSON.parse(data);
    console.log(date);
    // stdollist.innerHTML='';
    for(let i = 0 ; i<date.length ; i++){
      Courses.std.push(date[i]);
      console.log(Courses.std);
    }
  }
}
forminfo.addEventListener('submit' , getstudentinfo);
getdata();
render ();
