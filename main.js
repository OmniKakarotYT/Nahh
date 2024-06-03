x = 0;
y = 0;

//variablessedmylord
var screen_width = 0;
var screen_height = 0;
var apple = "";
var speak_data = "";
var to_number = "";


draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload(){
  apple = LoadImage('apple.png');
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
to_number = Number(content);
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
if(Number.isInteger(to_number)){
  document.getElementById("status").innerHTML = "Started Drawing Apple "; 
  draw_apple = "set";
 
}
else{
  document.getElementById("status").innerHTML = "The speech has not recognized a number "; 
}
}

function setup() {
  canvas = createCanvas(screen_width,screen_height-150);
    canvas.center();
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
}

function draw() {
  if(draw_apple == "set")
  {
   
    draw_apple = "";
    for(var i = 1; i<= to_number; i++){
      x= Math.floor(Math.random() * 700);
      y= Math.floor(Math.random() * 400);
      image(apple, x, y, 50, 50);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak();
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
