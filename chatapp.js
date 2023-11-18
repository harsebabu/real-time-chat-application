"use strict"
/*
=========================================
 | SCNRIPT BY THE SCRIPT MASTER RAHUL PATEL |
=========================================
*/
// Timer____
setInterval(function showTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  //print time___
  document.getElementById("timer").innerHTML = hours + ':' + minutes + ' ' + ampm;
}, 500);


/*
=========================================
 | I AM COMMING ONLINE FROM INDIA.
=========================================
*/
// Start Messenger____
function startMessanger() {
  var time = document.getElementById("timer").innerHTML;
  var typing = document.getElementById("typing");
  var scroll = document.getElementById("scroll");
  var username = document.getElementById("username").value;
  
  var mine = document.getElementsByClassName("myMessage");
  var yours = document.getElementsByClassName("yourMessage");
  var friend = document.getElementsByClassName("text");
  var arvind = document.getElementsByClassName("arvind");
  var timing = document.getElementsByClassName("timing");
  
  if (username != "") {
    document.getElementById("online").innerHTML = "Online";
    document.getElementById("online").style.display = "block";
    document.getElementById("offline").style.display = "none";
    setTimeout(function() {
      typing.style.visibility = "visible";
     }, 1000);
    setTimeout(function() {
      typing.style.visibility = "hidden";
      timing[0].innerHTML = time;
      mine[0].style.display = "block";
      scroll.scrollIntoView(false);
     }, 5000);
    friend[0].innerHTML = "ready";
    document.getElementById("user").innerHTML = username;
    document.getElementById("theLoader").style.display = "none";
  } else {
    showAlert("Error!", "Please provide your name!");
  };
};

/*
=========================================
 LET'S CHAT | PLEASE BE POSITIVE.
=========================================
*/
// Send Messages____
function sendMessage() {
//get IDs___
  var time = document.getElementById("timer").innerHTML;
  var input = document.getElementById("typeHere").value;
  var typing = document.getElementById("typing");
  var scroll = document.getElementById("scroll");

//get Classes___
  var mine = document.getElementsByClassName("myMessage");
  var yours = document.getElementsByClassName("yourMessage");
  var friend = document.getElementsByClassName("text");
  var arvind = document.getElementsByClassName("arvind");
  var timing = document.getElementsByClassName("timing");

  if (friend[0].innerHTML == 'ready') {
  //friend___
    friend[0].innerHTML = input;
    timing[1].innerHTML = time;
    yours[0].style.display = "block";
    scroll.scrollIntoView(false);
  //my msg___
    setTimeout(function() {
      typing.style.visibility = "visible";
    }, 3000);
    setTimeout(function() {
      typing.style.visibility = "hidden";
      timing[2].innerHTML = time;
      mine[1].style.display = "block";
      scroll.scrollIntoView(false);
      friend[1].innerHTML = "ready";
    }, 7000);
  } else if (friend[1].innerHTML == 'ready') {
  //friend___
    friend[1].innerHTML = input;
    timing[3].innerHTML = time;
    yours[1].style.display = "block";
    scroll.scrollIntoView(false);
  //my msg___
    setTimeout(function() {
      typing.style.visibility = "visible";
    }, 3000);
    setTimeout(function() {
      typing.style.visibility = "hidden";
      timing[4].innerHTML = time;
      timing[5].innerHTML = time;
      mine[2].style.display = "block";
      scroll.scrollIntoView(false);
      friend[2].innerHTML = "ready";
      document.getElementById("topper").style.marginTop = "60px";
    }, 11000);
  } else if (friend[2].innerHTML == 'ready') {
  //friend___
    friend[2].innerHTML = input;
    timing[6].innerHTML = time;
    yours[2].style.display = "block";
    scroll.scrollIntoView(false);
  //my msg___
    setTimeout(function() {
      typing.style.visibility = "visible";
    }, 3000);
    setTimeout(function() {
      typing.style.visibility = "hidden";
      timing[7].innerHTML = time;
      timing[8].innerHTML = time;
      mine[3].style.display = "block";
      scroll.scrollIntoView(false);
      friend[3].innerHTML = "ready";
    }, 8000);
  } else if (friend[3].innerHTML == 'ready') {
  //friend___
    friend[3].innerHTML = input;
    timing[9].innerHTML = time;
    yours[3].style.display = "block";
    scroll.scrollIntoView(false);
  //my msg___
    setTimeout(function() {
      typing.style.visibility = "visible";
    }, 3000);
    setTimeout(function() {
      typing.style.visibility = "hidden";
      timing[10].innerHTML = time;
      mine[4].style.display = "block";
      scroll.scrollIntoView(false);
      friend[4].innerHTML = "ready";
    }, 7000);
  } else if (friend[4].innerHTML == 'ready') {
  //friend___
    friend[4].innerHTML = input;
    timing[11].innerHTML = time;
    yours[4].style.display = "block";
    scroll.scrollIntoView(false);
  //my msg___
    setTimeout(function() {
      typing.style.visibility = "visible";
    }, 3000);
    setTimeout(function() {
      typing.style.visibility = "hidden";
      timing[12].innerHTML = time;
      mine[5].style.display = "block";
      scroll.scrollIntoView(false);
      friend[5].innerHTML = "ready";
    }, 8000);
  } else if (friend[5].innerHTML == 'ready') {
  //friend___
    friend[5].innerHTML = input;
    timing[13].innerHTML = time;
    yours[5].style.display = "block";
    scroll.scrollIntoView(false);
  //my msg___
    setTimeout(function() {
      typing.style.visibility = "visible";
    }, 3000);
    setTimeout(function() {
      typing.style.visibility = "hidden";
      timing[14].innerHTML = time;
      mine[6].style.display = "block";
      scroll.scrollIntoView(false);
      friend[6].innerHTML = "ready";
    }, 7000);
  } else if (friend[6].innerHTML == 'ready') {
  //friend___
    friend[6].innerHTML = input;
    timing[15].innerHTML = time;
    yours[6].style.display = "block";
    scroll.scrollIntoView(false);
  //my msg___
    setTimeout(function() {
      typing.style.visibility = "visible";
    }, 3000);
    setTimeout(function() {
      typing.style.visibility = "hidden";
      timing[16].innerHTML = time;
      mine[7].style.display = "block";
      scroll.scrollIntoView(false);
      friend[7].innerHTML = "ready";
    }, 10000);
  } else if (friend[7].innerHTML == 'ready') {
  //friend___
    friend[7].innerHTML = input;
    timing[17].innerHTML = time;
    yours[7].style.display = "block";
    scroll.scrollIntoView(false);
  //my msg___
    setTimeout(function() {
      typing.style.visibility = "visible";
    }, 3000);
    setTimeout(function() {
      typing.style.visibility = "hidden";
      timing[18].innerHTML = time;
      timing[19].innerHTML = time;
      mine[8].style.display = "block";
      scroll.scrollIntoView(false);
      friend[8].innerHTML = "ready";
    }, 7000);
  } else if (friend[8].innerHTML == 'ready') {
  //friend___
    friend[8].innerHTML = input;
    timing[20].innerHTML = time;
    yours[8].style.display = "block";
    scroll.scrollIntoView(false);
  //my msg___
    setTimeout(function() {
      typing.style.visibility = "visible";
    }, 3000);
    setTimeout(function() {
      typing.style.visibility = "hidden";
      timing[21].innerHTML = time;
      timing[22].innerHTML = time;
      mine[9].style.display = "block";
      scroll.scrollIntoView(false);
      friend[9].innerHTML = "ready";
    }, 10000);
  } else if (friend[9].innerHTML == 'ready') {
  //friend___
    friend[9].innerHTML = input;
    timing[23].innerHTML = time;
    yours[9].style.display = "block";
    scroll.scrollIntoView(false);
    document.getElementById("seenLast").innerHTML = time;
    document.getElementById("online").style.display = "none";
    document.getElementById("offline").style.display = "block";
    document.getElementById("typeHere").disabled = true;
    scroll.innerHTML = "No more messages!";
  } else {
    showAlert("Oops!", "Please wait for the next message!");
  }
  
// CLEAR INPUT_______
  document.getElementById("typeHere").value = "";
};

// Scroll function___
function scrollFunction() {
var scroll = document.getElementById("scroll");
  setTimeout(function() {
    scroll.scrollIntoView(false);
  }, 500);
};
/*
=========================================
 GETTING MESSAGES DATA FROM THE SERVER
=========================================
*/
const serve = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
/*
=========================================
 PLEASE UPVOTE AND SHARE THE MESSENGER
=========================================
*/

// The Custom Alert___
function showAlert(altHd, altMsg) {
  document.getElementById("alertWindow").style.display = "flex";
  document.getElementById("alert-Head").innerHTML = altHd;
  document.getElementById("alert-Msg").innerHTML = altMsg;
};
// Hide alert___
function alertHide() {
  document.getElementById("alertWindow").style.display = "none";
};