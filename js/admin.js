'use strict';
let newCourList=[];
let countainer = document.getElementById('container');
let stdollist  = document.getElementById('stdlist');



function CreateChart() {
  let context = document.getElementById('myChart').getContext('2d');
  let Courses = ['Arabic Student','English Student','German Student','Italian Student','Korean Student','Turkish Student','Dutch Student'];
  let getArabicStudent = [];
  let getEnglishStudent = [];
  let getGermanStudent = [];
  let getItalianStudent = [];
  let getKoreanStudent = [];
  let getTurkishStudent = [];
  let getDutchStudent = [];

  getArabicStudent.push(parseInt(localStorage.ArabicCourse));
  getArabicStudent.push(parseInt(localStorage.EnglishCourse));
  getArabicStudent.push(parseInt(localStorage.GermanCourse));
  getArabicStudent.push(parseInt(localStorage.ItalianCourse));
  getArabicStudent.push(parseInt(localStorage.KoreanCourse));
  getArabicStudent.push(parseInt(localStorage.TurkishCourse));
  getArabicStudent.push(parseInt(localStorage.DutchCourse));
  let chartObject = {
    // The type of chart we want to create
    type: 'pie',
    // The data for our dataset
    data: {
      labels: Courses,
      datasets: [{
        label: 'Arabic Studen results',
        backgroundColor: ['rgb(0, 131, 7)','rgb(179, 199, 2)','rgb(0, 0, 170)','rgb(199, 41, 2)','rgb(2, 186, 199)','rgb(103, 0, 134)','rgb(255, 123, 0)'],
        borderColor: 'rgb(255, 255, 255)',
        data: getArabicStudent,
      }, {
        label: 'English Studen results',
        data: getEnglishStudent,
      },{
        label: 'German Studen results',
        data: getGermanStudent,
      }, {
        label: 'Italian Studen results',
        data: getItalianStudent,
      }, {
        label: 'Korean Studen results',
        data: getKoreanStudent,
      }, {
        label: 'Turkish Studen results',
        data: getTurkishStudent,
      }, {
        label: 'Dutch Studen results',
        data: getDutchStudent,
      }],
    },

    // Configuration options go here
    options: {

      scales: {
        xAxes: [{
          barPercentage: 1
        }]
      }

    }
  };

  let chart = new Chart(context, chartObject);
}


// console.log(typeof(parseInt(localStorage.ArabicCourse) ) );

function render (){

  let renderCnt=1;
  for (let i= 0 ; i <newCourList.length ; i++ ){
    console.log(newCourList);
    let newstd =document.createElement('li');
    newstd.textContent = `Stduent name is ${newCourList[i].FirstName} ${newCourList[i].LastName} student number is ${renderCnt} and course name is ${newCourList[i].Course}`;
    stdollist.appendChild(newstd);//ol
    renderCnt++;
  }
  countainer.appendChild(stdollist);//section
  CreateChart();
}
console.log(localStorage.students);


function getdata(){
  if (localStorage.students){
    let data=localStorage.getItem('students');
    let date=JSON.parse(data);
    console.log(date);
    stdollist.innerHTML='';
    for(let i = 0 ; i<date.length ; i++){
      newCourList.push(date[i]);
      console.log(newCourList);
    }
  }
}

getdata();
render ();
