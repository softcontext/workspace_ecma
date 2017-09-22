var asia = function() {
  console.log('Hello Asia');
};

// exports.korea = asia;
export let korea = asia;

// exports.world = function() {
//   console.log('Hello World');
// };
export let world = function() {
  console.log('Hello World');
};
