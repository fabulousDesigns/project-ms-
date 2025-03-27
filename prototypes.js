let animal = {
  eats: true,
  makesound() {
    console.log("baa");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};
// rabbit.__proto__ = animal;

let longEar = {
  earLength: 10,
  __proto__: rabbit,
};

console.log(rabbit.eats);
rabbit.makesound();
