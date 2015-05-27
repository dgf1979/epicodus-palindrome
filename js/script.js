"use strict";


//jQuery
$( document ).ready(function() {
    console.log( "jQuery Ready" );

    $("#jqtest").text('jQuery Ready')

    $("#palindrome-form").submit(function(event) {
      console.log('submit');
      var inputText = $("#input-text").val();
      var resultDiv = $("#results");
      if(isPalindrome(inputText)) {
        resultDiv.text(inputText + " is a palindrome! Congrats!!");
      } else {
        resultDiv.text(inputText + " is NOT palindrome! Boo.");
      }

      event.preventDefault();
    });

});

//raw js
var foo = function(bar) {
  return false;
};

var isPalindrome = function(word) {
  word = word.toString().toLowerCase();
  var half = Math.ceil(word.length / 2);
  var frontHalf = word.substring(0, half);
  var backHalf = word.substring(word.length - half, word.length);
  var backHalfReversed = backHalf.split("").reverse().join("");
  return (frontHalf === backHalfReversed);
}
