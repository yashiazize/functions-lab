/** 
 * Returns a random number
 * Hint: Look up Math.random()
 * 
 * @returns {number} - a random number between 0 and 1
 * 
 */
function rand(n) {
 return Math.random (n)
}
console.log (rand(0,1))

/** 
 * Returns a rounded, random number between 1 and 6, like rolling a die
 * 
 * @returns {number} - A random number greater than 1 and less than 6
 */
function diceRoll(n) {
  return Math.round(Math.random(n,n));
}
console.log (diceRoll(1,6))

/**
 * Returns a rounded, random number between 0 and n
 * 
 * @param {number} n - A number that serves as the upper limit of random
 * @returns {number} - A random number betweeen 0 and n
 */
function randRange(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
console.log (randRange(0,100))



/**
 * Returns four
 * https://xkcd.com/221/
 * 
 * @returns {number} - the number 4. don't overthink it.
 */
function totallyFairDiceRoll() {
 return 4;
}



module.exports = {
  rand,
  randRange,
  diceRoll,
  totallyFairDiceRoll
}