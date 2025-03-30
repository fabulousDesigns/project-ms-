let total = 0,
  count = 1;

while (count <= 10) {
  total += count;
  count += 1;
}

//console.log(total);

// console.log(sum(range(1, 10)));

// for (let index = 0; index < 10; index++) {
//   console.log(index);
// }

function repeat(n, action) {
  for (let index = 0; index < n; index++) {
    action(index);
  }
}

// repeat(3, console.log);
// functions that create new functions.

function greatorThan(n) {
  return (m) => m > n;
}

let greatorThan10 = greatorThan(10);
// console.log(greatorThan10(11));

// We can also have functions that change other functions.

function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}

// noisy(Math.min)(3, 2, 1);

// We can even write functions that provide new types of control flow.

function unless(test, then) {
  if (!test) then();
}

repeat(3, (n) => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});

// ["A", "B"].forEach((l) => console.log(l));

