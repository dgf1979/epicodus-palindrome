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
  if (word.length % 2 === 0) {
    var half = word.length / 2;
    var frontHalf = word.substring(0, half);
    var backHalf = word.substring(half);
    var backHalfReversed = backHalf.split("").reverse().join("");
    return (frontHalf === backHalfReversed);
  }

  return null;
}
