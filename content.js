var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

console.log('START')
for (var i=2; i < 100; i+=4) {
  console.log($(".PSEDITBOX_DISPONLY").eq(i).text());
}

console.log('STOP')

// URL:
// https://csprd.mcmaster.ca/psc/prcsprd/EMPLOYEE/HRMS_LS/c/SA_LEARNER_SERVICES.SSS_MY_CRSEHIST.GBL
//
// 
// $("body").append("<div class = 'chrome-notification'><img src = 'https://www.sololearn.com/Icons/Courses/1082.png'><h2>jQuery Added! boi kid</h2></div>");
// $(".chrome-notification h2").css({"height":$(".chrome-notification").height()});
// $(".chrome-notification").fadeOut(2500);
