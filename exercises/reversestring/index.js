// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     return str.split("").reverse("").join("");
//   }
//   reverse("greetings");

function reverse(str) {
  let revstr = "";
  for (let char of str) {
    revstr = char + revstr;
  }
  return revstr;
}

module.exports = reverse;
