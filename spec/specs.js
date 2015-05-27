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
  });
});
