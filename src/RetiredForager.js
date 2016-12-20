var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
  // new properties
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

// overwrite methods from superclass
// age to 40
// job to 'gamble'
// canFly to false
// color to grey
// forage function to return new string
RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
}
// new methods
RetiredForagerBee.prototype.gamble = function() {
  // add treasure to retiredforagerbee's treasure chest
  this.treasureChest.push('treasure');
}