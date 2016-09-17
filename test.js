var yearOfPig = require('./');
var test = require('tape');

test('it should check if a year is year of pig', function(t) {
  t.plan(4);
  t.equal(yearOfPig(1995), true, "1995 is year of pig");
  t.equal(yearOfPig(1996), false, "1996 is not year of pig");
  t.equal(yearOfPig(new Date(2007, 0)), true, "2007 is year of pig");
  t.equal(typeof yearOfPig() === 'boolean', true);
});
