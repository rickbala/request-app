const request = require('request')

request('http://www.google.com', {json: true}, (err, res) => {
  if (err)
    console.log('Error! ' + err)
  else
    console.log(res.rawHeaders)
})
