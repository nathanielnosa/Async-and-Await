const http = new asynLibrary;

// Get request
// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err))

// Create a user data
const data ={
  name: "Nathaniel",
  username: "Webguru",
  email: "webguru.com"
}

// Post request
// http.post('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err))

// Put request
// http.put('https://jsonplaceholder.typicode.com/users/3')
// .then(data => console.log(data))
// .catch(err => console.log(err))

// Delete request
http.delete('https://jsonplaceholder.typicode.com/users/3')
.then(data => console.log(data))
.catch(err => console.log(err))