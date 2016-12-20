var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  // new properties
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

// overwrite methods from superclass
// age to 10
// job to 'find pollen'

// new methods
ForagerBee.prototype.forage = function (matsToCollect) {
  this.treasureChest.push(matsToCollect);
}