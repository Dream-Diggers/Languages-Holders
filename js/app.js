
//GET THE DATA FROM THE LOCAL STORAGE BY THE KEY.
let arabicStudents=JSON.parse(localStorage.getItem('ArabicCourse')) || 0;
let dutchStudents=JSON.parse(localStorage.getItem('DutchCourse')) || 0;
let englishStudents=JSON.parse(localStorage.getItem('EnglishCourse'))|| 0;
let germanyStudents=JSON.parse(localStorage.getItem('GermanCourse'))|| 0;
let italianStudents=JSON.parse(localStorage.getItem('ItalianCourse'))|| 0;
let koreanStudents=JSON.parse(localStorage.getItem('KoreanCourse'))|| 0;
let turkishStudents=JSON.parse(localStorage.getItem('TurkishCourse'))|| 0;

//CALCULATE THE NUMBER OF ALL STUDENTS.
let totalOfStudents=arabicStudents+dutchStudents+englishStudents+germanyStudents+italianStudents+koreanStudents+turkishStudents;

//APPENED THE NUMBER OF TOTAL TO THE HTML MAIN PAGE.
let numberOfApplicant=document.getElementById('numberOfApplicant');
let viewNumberOfApplicant=document.createElement('h1');

viewNumberOfApplicant.textContent=totalOfStudents+'+';
numberOfApplicant.appendChild(viewNumberOfApplicant);



///APPENED THE NUMBER OF STUDENTS ENROLL IN ARABIC COURSE.
let numberofArabicCourse=document.getElementById('ArabicCourse');
let viewNumberOfArabicStudens=document.createElement('p');

viewNumberOfArabicStudens.textContent='Already Enrolled:'+arabicStudents+'+';
numberofArabicCourse.appendChild(viewNumberOfArabicStudens);


///APPENED THE NUMBER OF STUDENTS ENROLL IN ENGLISH COURSE.
let numberofEnglishCourse=document.getElementById('englishCourse');
let viewNumberOfEnglishStudens=document.createElement('p');

viewNumberOfEnglishStudens.textContent='Already Enrolled:'+englishStudents+'+';
numberofEnglishCourse.appendChild(viewNumberOfEnglishStudens);

///APPENED THE NUMBER OF STUDENTS ENROLL IN DUTCH COURSE.
let numberofDutchCourse=document.getElementById('dutchCourse');
let viewNumberOfDutchStudens=document.createElement('p');

viewNumberOfDutchStudens.textContent='Already Enrolled:'+dutchStudents+'+';
numberofDutchCourse.appendChild(viewNumberOfDutchStudens);

/////APPENED THE NUMBER OF STUDENTS ENROLL IN GERMANY COURSE.
let numberofGermanyCourse=document.getElementById('germanyCourse');
let viewNumberOfGermanyStudens=document.createElement('p');

viewNumberOfGermanyStudens.textContent='Already Enrolled:'+germanyStudents+'+';
numberofGermanyCourse.appendChild(viewNumberOfGermanyStudens);

/////APPENED THE NUMBER OF STUDENTS ENROLL IN KOREAN COURSE.
let numberofItalianCourse=document.getElementById('italianCourse');
let viewNumberOfItalianStudents=document.createElement('p');

viewNumberOfItalianStudents.textContent='Already Enrolled:'+italianStudents+'+';
numberofItalianCourse.appendChild(viewNumberOfItalianStudents);

/////APPENED THE NUMBER OF STUDENTS ENROLL IN TURKISH COURSE.
let numberofKoreanCourse=document.getElementById('koreanCourse');
let viewNumberOfKoreanStudents=document.createElement('p');

viewNumberOfKoreanStudents.textContent='Already Enrolled:'+koreanStudents+'+';
numberofKoreanCourse.appendChild(viewNumberOfKoreanStudents);

/////APPENED THE NUMBER OF STUDENTS ENROLL IN ITALIAN COURSE.
let numberofTurkishCourse=document.getElementById('turkishCourse');
let viewNumberOfTurkishStudents=document.createElement('p');

viewNumberOfTurkishStudents.textContent='Already Enrolled:'+turkishStudents+'+';
numberofTurkishCourse.appendChild(viewNumberOfTurkishStudents);


