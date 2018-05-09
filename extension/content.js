//Iterative variables
var i=2;
var index=0;
var counter=0;

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
while (i < document.getElementsByClassName("PSEDITBOX_DISPONLY").length) {
  if (document.getElementsByClassName("PSEDITBOX_DISPONLY")[i].innerText.match(/^[ABCD][+-]$|^[ABCD]$/)) {
    let grade = number[letter.indexOf(document.getElementsByClassName("PSEDITBOX_DISPONLY")[i].innerText)]
    let unit = parseInt(document.getElementsByClassName("PSEDITBOX_DISPONLY")[i+1].innerText);
    let term
    if (document.getElementsByClassName("PSEDITBOX_DISPONLY")[i-1].innerText.slice(5,8) == "Fal"){
      term = parseInt(document.getElementsByClassName("PSEDITBOX_DISPONLY")[i-1].innerText.slice(0,5)) + 1
    } else {
      term = parseInt(document.getElementsByClassName("PSEDITBOX_DISPONLY")[i-1].innerText.slice(0,4))
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
  // console.log(terms[t] + ' Mac GPA = ' + (total/unitTotal).toFixed(2) + ' Percent = ' + convP(total/unitTotal).toFixed(1) );
  result = result.concat(terms[t], ' Mac GPA = ', (total/unitTotal).toFixed(2), ' Percent = ', convP(total/unitTotal).toFixed(1), '%\n');
}

//Calculate Overall Averages
var total = 0;
var unitTotal = 0;
for (i=0; i < grades.length; i++) {
  total += grades[i].grade * grades[i].unit;
  unitTotal += grades[i].unit;
}
// console.log('Overall GPA = ' + (total/unitTotal).toFixed(2) + ' Percent = ' + convP(total/unitTotal).toFixed(1) + '%');
result = result.concat('Overall GPA = ', (total/unitTotal).toFixed(2), ' Percent = ', convP(total/unitTotal).toFixed(1), '%');



alert('GPA RESULT: \n'+ result + '\n\nMade by Graeme Woods');
