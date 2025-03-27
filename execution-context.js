//console.log('name: ', name)
//console.log('handle: ', handle)
//console.log('getUser :', getUser)

var name = 'Tyler'
var handle = '@tylermcginnis'

function getUser () {
  return {
    name: name,
    handle: handle
  }
}

getUser()

// FEC

var firstName = 'Bernard'
var profileHandle = `${firstName}10`

function createProfileUrl(profileHandle){
  var socialUrl = 'http://beCreative.com/'
    return socialUrl + profileHandle
}

createProfileUrl(profileHandle.toLocaleLowerCase())