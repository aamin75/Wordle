const { TestWatcher } = require("jest");

function feedback(guess, correct) {
  const arr = [];
  const corrArray = Array.from(correct);
  var arbRes;
  var arbResArr = [];
  for (let i = 0; i < guess.length; i++) {
    if (correct.includes(guess[i])) {
      var gIndex = corrArray.findIndex(checkIndex);
      function checkIndex(corrLetter) {
        return corrLetter == guess[i];
      };
      if (guess[i] == correct[i]) {
        arbRes = 'correct';
        arbResArr.push(guess[i]);
      } else if (!arbResArr.includes(guess[i]) && correct[gIndex] != guess[gIndex]) {
        arbRes = 'misplaced';
      } else {
        arbRes = 'incorrect';
      };
    } else {
      arbRes = 'incorrect';
    };
    arr.push(
      { letter: guess[i], result: arbRes },
    );
  };
  console.log(arr);
  return arr;
}

test('a + a => correct', () => {
  const result = feedback('a', 'a');
  expect(result).toEqual([
    { letter: 'a', result: 'correct' },
  ]);
});
test('a + b => incorrect', () => {
  const result = feedback('a', 'b');
  expect(result).toEqual([
    { letter: 'a', result: 'incorrect' },
  ]);
});
test('abb + abc => incorrect', () => {
  const result = feedback('abb', 'abc');
  expect(result).toEqual([
    { letter: 'a', result: 'correct' },
    { letter: 'b', result: 'correct' },
    { letter: 'b', result: 'incorrect' },
  ]);
});
test('abc + abc => incorrect', () => {
  const result = feedback('abc', 'abc');
  expect(result).toEqual([
    { letter: 'a', result: 'correct' },
    { letter: 'b', result: 'correct' },
    { letter: 'c', result: 'correct' },
  ]);
});
test('cba + abc => incorrect', () => {
  const result = feedback('cba', 'abc');
  expect(result).toEqual([
    { letter: 'c', result: 'misplaced' },
    { letter: 'b', result: 'correct' },
    { letter: 'a', result: 'misplaced' },
  ]);
});
test('bbb + abc => incorrect', () => {
  const result = feedback('bbb', 'abc');
  expect(result).toEqual([
    { letter: 'b', result: 'incorrect' },
    { letter: 'b', result: 'correct' },
    { letter: 'b', result: 'incorrect' },
  ]);
});