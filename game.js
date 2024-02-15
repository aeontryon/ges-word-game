function jumpy()
{
    window.location = "jumpy.html";
}

function home()
{
    window.location = "game.html";
}

function yell()
{
    window.location = "yell.html";
}

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var Content =  event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
}

function noise()
{
    document.getElementById("audio2").play();
}

