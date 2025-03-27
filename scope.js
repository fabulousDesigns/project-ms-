function foo () {
    var bar = 'Declared in foo'
  }

  foo()

  //console.log(bar)

  function first () {
      var name = 'Jordyn'

      console.log(name)
    }

    function second () {
      var name = 'Jake'

      console.log(name)
    }

    console.log(name) // undefined
    var name = 'Tyler'
    first() // Jordyn
    second() // Jake
    console.log(name) //Tyler


    var name = 'Tyler'

    function logName () {
      console.log(name)
    }

    logName()