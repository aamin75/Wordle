const submitButton = document.querySelector('button');  // the submitting button
submitButton.addEventListener('click', submitFn);       // calling a function when click on the submitting button
//////////////////////////////////////////////////////////
//                  ALGORITHM   (A)                     //
//////////////////////////////////////////////////////////
function submitFn() {                                   // starting of Algorithm (A) solution
  const wLength = document.querySelector('input').value;// decide word length from the input box
  var corrWord = prompt('Enter the correct word:');     // enter the correct word
  var gWord = prompt('Enter the guessed word: ');       // enter the guessed word
  const corrArray = Array.from(corrWord);               // the correct characters array
  const gArray = Array.from(gWord);                     // convert the guessed word to characters array
  var resultArray = [];                                 // initial result's case array
  var arbRes;                                           // arbitrary result
  var arbResArr = [];                                   // arbitrary result array for correct letters
  if (gArray.length != wLength) {                       // check the length of the guessed and the correct words
    console.log('Error, the length of your word is not correct'); // print an error message to notify the user for longer or shorter words
  } else {
    gArray.forEach((letr, index) => {                   // loop for each letter in the guessed word
      if (!corrArray.includes(letr)) {                  // search for the letter in the correct array
        arbRes = 'incorrect';                           // the incorrect case
      } else if (letr == corrArray[index]) {            // if the letter in the correct place
        arbRes = 'correct';                             // the correct case
        arbResArr.push(letr);                           // push the correct letter to an arbitrary array for correct letters
      } else {                                          // if the letter has misplaced
        var gIndex = corrArray.findIndex(checkIndex);   // find the guessed index in the correct array
        if (!arbResArr.includes(letr) && corrArray[gIndex] != gArray[gIndex]) { // compare if the letter is not exist in the
          // arbitrary array for correct letters and no similar letter in the duessed array in the same position
          arbRes = 'misplaced';                         // assign misplaced case to the guessed letter
          corrArray[gIndex] = [];                       // emptying the place in the correct array to avoid repeating issue
        } else {
          arbRes = 'incorrect';                         // change the case to incorrect for repeated guessed letters
        };
        function checkIndex(corrLetter) {               // compare the index with the correct letter index
          return corrLetter == letr;
        };
      };
      resultArray.push(
        { letter: letr, result: arbRes },               // push the letter and its result to the result array
      );
    });
  };
  // console.log('arbitrary result array: ', arbResArr);
  console.log('Result: ', resultArray);
}; 