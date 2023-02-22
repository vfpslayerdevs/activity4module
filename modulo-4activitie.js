//From archive SpeakHello
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
var helloSpeaker = {};
var byeSpeaker = {};
//From archive SpeakGoodbye
helloSpeaker.speak = function(name) {
  console.log("Hello " + name);
}

byeSpeaker.speak = function(name) {
  console.log("Goodbye " + name);
}
//From archive Script.JS
for (var i = 0; i < names.length; i++) { 
  var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}
