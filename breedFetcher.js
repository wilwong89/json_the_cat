const request = require('request');
const args = [...process.argv.slice(2)];

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  if (error) {
    console.log("Error:",error);
  } else {
    let data = JSON.parse(body);
  
    if (data && data.length) console.log(data[0].description);
    else {
      console.log("No match found");
    }
  }
});