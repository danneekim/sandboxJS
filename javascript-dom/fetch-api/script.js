
//GET
fetch('https://reqres.in/api/users')
  .then(res => res.json())
  .then(data => console.log(data))

//GET by Id
fetch('https://reqres.in/api/users/23')
  .then(res => {
    if (res.ok) {
      console.log('success')
    } else {
      console.log('not success')
    }
    res.json()
  })
  .then(data => console.log(data))
  .catch(err => console.log('err'));

// Fetch always suceeds

//POST
fetch('https://reqres.in/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'User 1' })
})
  .then(res => {
    console.log(res);
    return res.json()
  })
  .then(data => console.log(data))
  .catch(err => console.log('err'));

