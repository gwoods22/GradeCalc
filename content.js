//Activate jQuery
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(script);


var i=2;
var index=0;

//Reference arrays
var letter = ['A+','A','A-','B+','B','B-','C+','C','C-','D+','D','D-'];
var number = [12,11,10,9,8,7,6,5,4,3,2,1];
var gpa = [4,3.9,3.7,3.3,3,2.7,2.3,2,1.7,1.3,1,0.7];
var basePercent = []

//Grade Object
function Grade (g,u,t) {
    this.term = t;
    this.grade = g;
    this. unit = u;
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
  console.log(terms[t] + ' GPA = ' + (total/unitTotal).toFixed(2));
}

//Calculate Overall Averages
var total = 0;
var unitTotal = 0;
for (i=0; i < grades.length; i++) {
  total += grades[i].grade * grades[i].unit;
  unitTotal += grades[i].unit;
}
console.log('Overall GPA = ' + (total/unitTotal).toFixed(2));


// URL:
// https://csprd.mcmaster.ca/psc/prcsprd/EMPLOYEE/HRMS_LS/c/SA_LEARNER_SERVICES.SSS_MY_CRSEHIST.GBL
//
// NOTIFICATION:
// $("body").append("<div class = 'chrome-notification'><img src = 'https://www.sololearn.com/Icons/Courses/1082.png'><h2>jQuery Added! boi kid</h2></div>");
// $(".chrome-notification h2").css({"height":$(".chrome-notification").height()});
// $(".chrome-notification").fadeOut(2500);
