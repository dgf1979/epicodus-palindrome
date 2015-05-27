"use strict";


//jQuery
$( document ).ready(function() {
    console.log( "jQuery Ready" );

    $("#jqtest").text('jQuery Ready')
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
