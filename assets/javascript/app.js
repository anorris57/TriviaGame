

var number = 60;

var intervalID;
//Changing line #7
$("#start").click(function(){
  run();
  $("#hideStart").hide();
  $("form").removeClass("hidden");
  $("#end").removeClass("hidden");

});//end for start

function run() {
  
  intervalID = setInterval(decrement, 1000);
}

function decrement() {

  number--;
  //  Show the number in the #show-number tag.
  $("#showNumber").html("<h2>Time Remaining: " + number + " Seconds</h2>");
  //  Once number hits zero...
  if (number === 0) {
    //  ...run the stop function.
    stop();
  }
}

function stop () {
  clearInterval(intervalID);
  $("#viewQuestions").hide();
  $("#end").hide();
  submitAnswers();
}
  
$("#end").on("click", stop);

function submitAnswers() {
  var total = 8;
  var score = 0;
  var unAnswered = 0;

  //Get User Input
  var q1 = document.forms["quizForm"] ["q1"].value;//gives value of user's choice
  var q2 = document.forms["quizForm"] ["q2"].value;
  var q3 = document.forms["quizForm"] ["q3"].value;
  var q4 = document.forms["quizForm"] ["q4"].value;
  var q5 = document.forms["quizForm"] ["q5"].value;
  var q6 = document.forms["quizForm"] ["q6"].value;
  var q7 = document.forms["quizForm"] ["q7"].value;
  var q8 = document.forms["quizForm"] ["q8"].value;
    //alert(q1);
    //Set Correct Answers
  var answers = ["a","c","d","a","b","b","d","b"];

  //Check Answers changing order to try and get correct output/don't change
  for(i = 1; i <= total; i++) {
    if(eval('q' + i) !== (answers[i - 1]) && (eval('q' + i) === false)) {
      unAnswered++;
    }
    if(eval('q' + i) === answers[i - 1]) {
      score++;
    }
  }
  //console.log(score);
 $("#results").html('<h3>Done</h3>Correct Answers:  '+ score + '<br><br>Incorrect Answers: '+ (total - score) + '<br><br> Unanswered: ' + unAnswered);
  
  return false;
}


  

