var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  // new properties
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

// overwrite methods from superclass
// age to 10
// job to 'make honey'

HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function () {
  this.honeyPot--;
}