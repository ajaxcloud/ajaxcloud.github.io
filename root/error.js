// JAVASCRIPT [ES2015]

// Author: SandyStrays
// Modified: 27 December, 2021 12:01 PM

// COPYRIGHT 2021 CHROMIUM AUTHOR: SANDYSTRAYS
// LOCALHOST:12345; 127.0.0.1:12345

// define Heading (ERR CODE) & Fontstyle
var ERR_401 = "<h1>Access denied!</h1>";
var RobotoMono = "'Roboto Mono', monospace";

// get HTML head element using DOM:getElementByTagName
var head = document.getElementsByTagName('head')[0];
var link = document.createElement('link');

// set attribute(s) of the link element(s)
link.rel  = "stylesheet";
link.href = "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap";

head.appendChild(link);

// A new function for body content
function MyFunction() {
         let htm = document.getElementsByTagName('body')
         [0].innerHTML = ERR_401;
         
  document.getElementsByTagName('body')[0].style.fontFamily = RobotoMono;
  document.getElementsByTagName('body')[0].style.textAlign = "center";
}

MyFunction();
