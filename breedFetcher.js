const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      // Nothing
    } else {
      body = JSON.parse(body);
    }
    
    callback(error, body);
  });
};

module.exports = {fetchBreedDescription};
