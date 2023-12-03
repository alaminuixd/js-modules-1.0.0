// Capitalize each first letter of each letter in a string
function capitalize(text) {
  let words = text.split(" ");
  words = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return words.join(" ");
}
console.log(capitalize("hello how are you doing today?"));
// Another text effect
