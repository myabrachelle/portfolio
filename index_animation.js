// function([string1, string2],target id,[color1,color2])    
consoleText(['Hello!', 'Welcome to My Portfolio', 'Learn More Below!'], 'text',['tomato','rebeccapurple','#247E6C']);

function consoleText(words, id, colors) {

  // changes colors for each transition
  if (colors === undefined) colors = ['#fff'];

  // two variables to determine if text is visible
  var visible = true;
  var waiting = false;
  var con = document.querySelector('#console');
  var letterCount = 1;
  var x = 1;
  
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])

  // setInterval determines the time before removing old text and displaying next string 
  window.setInterval(function() {

    // if nothing is present, code will start printing first available string letter-by-letter until reaching end of string
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {

        // usedColor and usedWord variable will remove first item in a string and adds to the end of the list
        //allows function to move onto next string in list but continues process once reaching end of original list
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 500)
    } 
    
    else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 500) 
    } 
    
    else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)


  // determines timing of cursor that follows text when it is typing
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}