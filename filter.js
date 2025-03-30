let users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 47, occupation: "programmer" },
  { name: "Albert", age: 76, occupation: "programmer" },
];

let filteredUsers = [];
for (let index = 0; index < users.length; index++) {
  if (users[index].age > 40 && users[index].occupation === "programmer") {
    filteredUsers = [...filteredUsers, users[index]];
  }
}

console.log(filteredUsers);

// filter function
let filteredUsersWithFilterHof = users.filter((user) => {
  return user.age > 40 && user.occupation === "programmer";
});

console.log(filteredUsersWithFilterHof);
