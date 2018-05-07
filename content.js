//jQuery CDN
var jQueryScript = document.createElement('script');
jQueryScript.type = 'text/javascript';
jQueryScript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
document.head.appendChild(jQueryScript);

//Alertify CDN
var AlertifyScript = document.createElement('script');
AlertifyScript.type = 'text/javascript';
AlertifyScript.src = 'https://cdn.jsdelivr.net/npm/alertifyjs@1.11.1/build/alertify.min.js';
document.head.appendChild(AlertifyScript);


//Iterative variables
var i=2;
var index=0;

//Reference arrays
var letter = ['A+','A','A-','B+','B','B-','C+','C','C-','D+','D','D-'];
var number = [12,11,10,9,8,7,6,5,4,3,2,1];
var percent = [90,85,80,77,73,70,67,63,60,57,53,50];
var percentRange = [9.99,4.99,4.99,2.99,3.99,2.99,2.99,3.99,2.99,2.99,3.99,2.99];

//Grade Object
function Grade (g,u,t) {
    this.term = t;
    this.grade = g;
    this. unit = u;
}

//Result String
var result = ''

//Percent Converter
function convP (grade) {
  let base = percent[number.indexOf(Math.floor(grade))]
  let mult = grade - Math.floor(grade);
  let range = percentRange[number.indexOf(Math.floor(grade))];
  return base + mult * range;

}

//Data Arrays
var grades = [];
var terms = [];

//Parsing
while ($(".PSEDITBOX_DISPONLY").eq(i).text() != '') {
  if ($(".PSEDITBOX_DISPONLY").eq(i).text().match(/^[ABCD][+-]$|^[ABCD]$/)) {
    let grade = number[letter.indexOf($(".PSEDITBOX_DISPONLY").eq(i).text())]
    let unit = parseInt($(".PSEDITBOX_DISPONLY").eq(i+1).text());
    let term
    if ($(".PSEDITBOX_DISPONLY").eq(i-1).text().slice(5,8) == "Fal"){
      term = parseInt($(".PSEDITBOX_DISPONLY").eq(i-1).text().slice(0,5)) + 1
    } else {
      term = parseInt($(".PSEDITBOX_DISPONLY").eq(i-1).text().slice(0,4))
    }
    if (!(terms.includes(term))) { terms.push(term); }
    grades[index] = new Grade(grade,unit,term);
    index++;
  }
  i+=4
}

//Put School Years in chronological order
terms.sort()

//Calculate Year Averages
for (t in terms) {
  let total = 0;
  let unitTotal = 0;
  for (i=0; i < grades.length; i++) {
    if (grades[i].term == terms[t]) {
      total += grades[i].grade * grades[i].unit;
      unitTotal += grades[i].unit;
    }
  }
  console.log(terms[t] + ' Mac GPA = ' + (total/unitTotal).toFixed(2) + '  Percent = ' + convP(total/unitTotal).toFixed(1) );
  result = result.concat(terms[t] + ' Mac GPA = ' + (total/unitTotal).toFixed(2) + '  Percent = ' + convP(total/unitTotal).toFixed(1) );
}

//Calculate Overall Averages
var total = 0;
var unitTotal = 0;
for (i=0; i < grades.length; i++) {
  total += grades[i].grade * grades[i].unit;
  unitTotal += grades[i].unit;
}
console.log('Overall GPA = ' + (total/unitTotal).toFixed(2) + ', Percent = ' + convP(total/unitTotal).toFixed(1) + '%');
result = result.concat('Overall GPA = ' + (total/unitTotal).toFixed(2) + ', Percent = ' + convP(total/unitTotal).toFixed(1) + '%');


// URL:
// https://csprd.mcmaster.ca/psc/prcsprd/EMPLOYEE/HRMS_LS/c/SA_LEARNER_SERVICES.SSS_MY_CRSEHIST.GBL

//Percentages URL:
// https://registrar.mcmaster.ca/exams/grades/

// NOTIFICATION:
alertify.alert('GPA Result', result);

// $("body").append("<div class = 'chrome-notification'><img src = 'https://www.sololearn.com/Icons/Courses/1082.png'><h1>Results:</h1><h2>{{result}}</h2></div>");
// $(".chrome-notification h2").css({"height":$(".chrome-notification").height()});
// $(".chrome-notification").fadeOut(10000);
