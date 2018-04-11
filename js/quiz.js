function reset() {
  var answerReset = document.querySelectorAll("input");
  for (var i = 0; i < answerReset.length; i++) {
    if (answerReset[i].checked) {
      answerReset[i].checked = answerReset[i].unchecked;
    }
  }
  var answerBoxReset = document.querySelectorAll(".answerBox");
  for (var i = 0; i < answerBoxReset.length; i++) {
    answerBoxReset[i].style.visibility = "hidden"
  }
  document.getElementById("result").innerHTML = "";
}

function myFunction() {
  var answerBoxReset = document.querySelectorAll(".answerBox");
  for (var i = 0; i < answerBoxReset.length; i++) {
    answerBoxReset[i].style.visibility = "visible"
  }
  var score = 0;
  var checkedValue;

  var answer1 = document.querySelectorAll("#answer1 input");
  var answerValue1 = "Ontario";
  var output1 = "";
  for (var i = 0; i < answer1.length; i++) {
      if (answer1[i].checked) {
        checkedValue = document.querySelectorAll("#answer1 label")[i].textContent;
        if (checkedValue === answerValue1){
          document.getElementById("answerBox1").style.borderColor = "green";
          score++;
        } else {
          document.getElementById("answerBox1").style.borderColor = "red";
          output1 += '. The Correct Answer was ' + '\"' + document.querySelectorAll("#answer1 label")[1].textContent + '\"';
        }
      }
  }
  document.getElementById("answerBox1").innerHTML = "Your Answer: " + checkedValue + " " + output1;

  var answer2 = document.querySelectorAll("#answer2 input");
  var answerValue2 = "Quebec";
  var output2 = "";
  for (var i = 0; i < answer2.length; i++) {
      if (answer2[i].checked) {
        checkedValue = document.querySelectorAll("#answer2 label")[i].textContent;
        if (checkedValue === answerValue2){
          document.getElementById("answerBox2").style.borderColor = "green";
          score++;
        } else {
          document.getElementById("answerBox2").style.borderColor = "red";
          output2 += '. The Correct Answer was ' + '\"' + document.querySelectorAll("#answer2 label")[2].textContent + '\"';
        }
      }
  }
  document.getElementById("answerBox2").innerHTML = "Your Answer: " + checkedValue + " " + output2;

  var answer3 = document.querySelectorAll("#answer3 input");
  var answerValue3 = "Saskatchewan";
  var output3 = "";
  for (var i = 0; i < answer3.length; i++) {
      if (answer3[i].checked) {
        checkedValue = document.querySelectorAll("#answer3 label")[i].textContent;
        if (checkedValue === answerValue3){
          document.getElementById("answerBox3").style.borderColor = "green";
          score++;
        } else {
          document.getElementById("answerBox3").style.borderColor = "red";
          output3 += '. The Correct Answer was ' + '\"' + document.querySelectorAll("#answer3 label")[2].textContent + '\"';
        }
      }
  }
  document.getElementById("answerBox3").innerHTML = "Your Answer: " + checkedValue + " " + output3;

  var answer4 = document.querySelectorAll("#answer4 input");
    var answerValue4 = "They live to be 1,000 years old.";
    var output4 = "";
    for (var i = 0; i < answer4.length; i++) {
        if (answer4[i].checked) {
          checkedValue = document.querySelectorAll("#answer4 label")[i].textContent;
          if (checkedValue === answerValue4){
            document.getElementById("answerBox4").style.borderColor = "green";
            score++;
          } else {
            document.getElementById("answerBox4").style.borderColor = "red";
            output4 += ' The Correct Answer was ' + '\"' + document.querySelectorAll("#answer4 label")[1].textContent + '\"';
          }
        }
    }
  document.getElementById("answerBox4").innerHTML = "Your Answer: " + checkedValue + " " + output4;

  var answer5 = document.querySelectorAll("#answer5 input");
    var answerValue5 = "24 hours, the sun never sets.";
    var output5 = "";
    for (var i = 0; i < answer5.length; i++) {
        if (answer5[i].checked) {
          checkedValue = document.querySelectorAll("#answer5 label")[i].textContent;
          if (checkedValue === answerValue5){
            document.getElementById("answerBox5").style.borderColor = "green";
            score++;
          } else {
            document.getElementById("answerBox5").style.borderColor = "red";
            output5 += ' The Correct Answer was ' + '\"' + document.querySelectorAll("#answer5 label")[2].textContent + '\"';
          }
        }
    }
  document.getElementById("answerBox5").innerHTML = "Your Answer: " + checkedValue + " " + output5;

  var answer6 = document.querySelectorAll("#answer6 input");
    var answerValue6 = "Prince Edward Island";
    var output6 = "";
    for (var i = 0; i < answer6.length; i++) {
        if (answer6[i].checked) {
          checkedValue = document.querySelectorAll("#answer6 label")[i].textContent;
          if (checkedValue === answerValue6){
            document.getElementById("answerBox6").style.borderColor = "green";
            score++;
          } else {
            document.getElementById("answerBox6").style.borderColor = "red";
            output6 += '. The Correct Answer was ' + '\"' + document.querySelectorAll("#answer6 label")[2].textContent + '\"';
          }
        }
    }
  document.getElementById("answerBox6").innerHTML = "Your Answer: " + checkedValue + " " + output6;

  var answer7 = document.querySelectorAll("#answer7 input");
    var answerValue7 = "Nova Scotia";
    var output7 = "";
    for (var i = 0; i < answer7.length; i++) {
        if (answer7[i].checked) {
          checkedValue = document.querySelectorAll("#answer7 label")[i].textContent;
          if (checkedValue === answerValue7){
            document.getElementById("answerBox7").style.borderColor = "green";
            score++;
          } else {
            document.getElementById("answerBox7").style.borderColor = "red";
            output7 += '. The Correct Answer was ' + '\"' + document.querySelectorAll("#answer7 label")[2].textContent + '\"';
          }
        }
    }
  document.getElementById("answerBox7").innerHTML = "Your Answer: " + checkedValue + " " + output7;

  var answer8 = document.querySelectorAll("#answer8 input");
    var answerValue8 = "Saskatchewan";
    var output8 = "";
    for (var i = 0; i < answer8.length; i++) {
        if (answer8[i].checked) {
          checkedValue = document.querySelectorAll("#answer8 label")[i].textContent;
          if (checkedValue === answerValue8){
            document.getElementById("answerBox8").style.borderColor = "green";
            score++;
          } else {
            document.getElementById("answerBox8").style.borderColor = "red";
            output8 += '. The Correct Answer was ' + '\"' + document.querySelectorAll("#answer8 label")[1].textContent + '\"';
          }
        }
    }
  document.getElementById("answerBox8").innerHTML = "Your Answer: " + checkedValue + " " + output8;

  var answer9 = document.querySelectorAll("#answer9 input");
    var answerValue9 = "Lake Michigan";
    var output9 = "";
    for (var i = 0; i < answer9.length; i++) {
        if (answer9[i].checked) {
          checkedValue = document.querySelectorAll("#answer9 label")[i].textContent;
          if (checkedValue === answerValue9){
            document.getElementById("answerBox9").style.borderColor = "green";
            score++;
          } else {
            document.getElementById("answerBox9").style.borderColor = "red";
            output9 += '. The Correct Answer was ' + '\"' + document.querySelectorAll("#answer9 label")[2].textContent + '\"';
          }
        }
    }
  document.getElementById("answerBox9").innerHTML = "Your Answer: " + checkedValue + " " + output9;

  var answer10 = document.querySelectorAll("#answer10 input");
    var answerValue10 = "'O Canada! Our home and native land.'";
    var output10 = "";
    for (var i = 0; i < answer10.length; i++) {
        if (answer10[i].checked) {
          checkedValue = document.querySelectorAll("#answer10 label")[i].textContent;
          if (checkedValue === answerValue10){
            document.getElementById("answerBox10").style.borderColor = "green";
            score++;
          } else {
            document.getElementById("answerBox10").style.borderColor = "red";
            output10 += ' The Correct Answer was ' + document.querySelectorAll("#answer10 label")[0].textContent;
          }
        }
    }
  document.getElementById("answerBox10").innerHTML = "Your Answer: " + checkedValue + " " + output10;

  // Total score
  var hiddenBox = document.querySelectorAll(".answerBox");
  for(var i = 0; i < hiddenBox.length; i++) {
    hiddenBox[i].classList.add("showAnswerBox");
  }
  document.getElementById("result").innerHTML = "You scored: " + score + " / 10";

  // Validation check
  var validation = document.querySelectorAll(".answer input");
  var count = 0;
  for (var i = 0; i < validation.length; i++) {
    if (validation[i].checked) {
      count++;
    }
  }
  if (count < 10) {
    alert("Please complete the quiz : )");
    var answerBoxReset = document.querySelectorAll(".answerBox");
    for (var i = 0; i < answerBoxReset.length; i++) {
      answerBoxReset[i].style.visibility = "hidden"
    }
    document.getElementById("result").innerHTML = "";
  }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
      document.getElementById("goTop").style.display = "block";
  } else {
      document.getElementById("goTop").style.display = "none";
  }
}

// Back to top button control
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
