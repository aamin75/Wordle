const { TestWatcher } = require("jest");
//////////////////////////////////////////////////////////
//                  ALGORITHM   (A)                     //
//////////////////////////////////////////////////////////

// there is no length condition in test mode
// enter the guessed and the correct word
// declare an empty result array 
// create an array form the correct word
// declare an arbitrary reslut variable (arbRes) and an arbitrary result array (arbResArr)
// start a loop for every letter in the guessed word
// search for the letter in the correct word
// positive answer: find its place in the correct word
// if the letter in the correct place, assign correct case to the (arbRes) and push the letter to the (arbResArr)
// if the letter in another place in the correct word, but not included in the (arbResArr) and there is no similar letter in the right place 
// of the guessed word, then assign misplaced case to the (arbRes) and empty the place of the correct letter from the correct array (not correct word) to avoid repeating issue
// if something else, assign incorrect case to the (arbRes)
// push the letter and its result to the result array
// Six tests have been used and passed
// Tests included: single letter as correct and as incorrect
// three letters words: correct, correct and incorrect, correct and misplaced
// five letters word: correct and misplaced and incorrect

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
        corrArray[gIndex] = [];
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

// single letter as correct
test('a + a => correct', () => {
  const result = feedback('a', 'a');
  expect(result).toEqual([
    { letter: 'a', result: 'correct' },
  ]);
});
// single letter as incorrect
test('a + b => incorrect', () => {
  const result = feedback('a', 'b');
  expect(result).toEqual([
    { letter: 'a', result: 'incorrect' },
  ]);
});
// three letters words: correct
test('abc + abc => incorrect', () => {
  const result = feedback('abc', 'abc');
  expect(result).toEqual([
    { letter: 'a', result: 'correct' },
    { letter: 'b', result: 'correct' },
    { letter: 'c', result: 'correct' },
  ]);
});
// three letters words: correct and incorrect
test('abb + abc => incorrect', () => {
  const result = feedback('abb', 'abc');
  expect(result).toEqual([
    { letter: 'a', result: 'correct' },
    { letter: 'b', result: 'correct' },
    { letter: 'b', result: 'incorrect' },
  ]);
});
// three letters words: correct and misplaced
test('cba + abc => incorrect', () => {
  const result = feedback('cba', 'abc');
  expect(result).toEqual([
    { letter: 'c', result: 'misplaced' },
    { letter: 'b', result: 'correct' },
    { letter: 'a', result: 'misplaced' },
  ]);
});
// five letters word: correct, misplaced and incorrect
test('print + power => incorrect', () => {
  const result = feedback('print', 'power');
  expect(result).toEqual([
    { letter: 'p', result: 'correct' },
    { letter: 'r', result: 'misplaced' },
    { letter: 'i', result: 'incorrect' },
    { letter: 'n', result: 'incorrect' },
    { letter: 't', result: 'incorrect' },
  ]);
});