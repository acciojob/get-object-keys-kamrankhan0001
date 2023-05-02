your JS code here. If required.
creating an object called student with a property called name
const student = {
  name: 'John Doe'
};

// adding a property to the Object prototype called getKeys()
Object.prototype.getKeys = function() {
  return Object.keys(this);
}

// calling getKeys() on the student object
console.log(student.getKeys()); // ['name']
//
