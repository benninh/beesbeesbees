var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  // new properties
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

// overwrite methods from super class
// age set to 5

// color set to yellow