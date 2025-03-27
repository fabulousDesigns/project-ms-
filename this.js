const user = {
    name: 'Tyler',
    age: 27,
    greet(){
        console.log(`Hello my name is ${this.name}`)
    },
    mother: {
        name: 'stacey',
        greet(){
            console.log(`Hello, my name is ${this.name}`)
        }
    }
}

// user.greet()
// user.mother.greet()

function greet(){
    console.log(`Hello my name is ${this.name}`)
}

const user2 = {
    name: 'Bernard',
    age: '25'
}

//greet.call(user2)

function greetings (l1, l2, l3) {
    console.log(
      `Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`
    )
  }

const languages = ['JavaScript', 'Ruby', 'Python']
const [first, second, third] = languages;
console.log(greetings.call(user2, second, first, third))

