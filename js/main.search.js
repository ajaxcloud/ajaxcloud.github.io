// JAVASCRIPT VERSION [ES2015]

// Author   : SandyStrays
// Modified : JAN 4, 2023 10:42 PM

// No one is allowed to copy/edit this file except 
// the owner/author of this file.

// Use setTimeout function to constantly check the
// input values and trigger different functions
(function loop() {
  setTimeout(function() {
    // Get input value from search bar
    var inputValue = document.getElementById("searchBar").value;
    // This will split the value or sentence of input
    const lastWord = inputValue.split(' ').pop();
    
    // check for each word {Last to 4}
    // For eg. This is a sentence ==>  ence || google.com ==>  .com
    const xas = lastWord[lastWord.length - 4];
    const xbs = lastWord[lastWord.length - 3];
    const xcs = lastWord[lastWord.length - 2];
    const xds = lastWord[lastWord.length - 1];
    
    const zas = inputValue.charAt(0);
    const zbs = inputValue.charAt(1);
    const zcs = inputValue.charAt(2);
    const zds = inputValue.charAt(3);
    const zes = inputValue.charAt(4);
    
    // get the finalvalue as finalWord
    finalWord = xas + xbs + xcs + xds;
    
    http  = zas + zbs + zcs + zds
    https = zas + zbs + zcs + zds + zes
   
    // Using onkeypress event for search and
    // setting function
    document.getElementById("searchBar").onkeypress = function() {
      goUrl()
    };

    function goUrl() {
      // This will redirect to a webpage/site
		var x = document.getElementById("searchBar").value
		window.location = "https://google.com/search?q=" + x + "&authuser=1";
	
      if (xas == "." || xbs == ".") {
        window.location = "https://" + inputValue;
      }
    }
    loop()
  }, 500); // 10000 = 10000ms = 9s
}());
