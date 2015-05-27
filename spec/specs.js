describe('foo', function() {
  it("is some function or expectation", function() {
    expect(foo('bar')).to.equal(false);
  });
});

describe('isPalindrome', function() {
  it("is a palindrome", function() {
    expect(isPalindrome('monkey')).to.equal(false);
    expect(isPalindrome('abba')).to.equal(true);
    expect(isPalindrome('racecar')).to.equal(true);
    expect(isPalindrome('Hello olleH')).to.equal(true);
    expect(isPalindrome(1001001)).to.equal(true);
    expect(isPalindrome('Racecar')).to.equal(true);
  });
});
