const apiKey ="d1078b21e7254065ba5e939a700e06df";

const url =`https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

const resultsContainer = document.querySelector(".games-container");

fetch(url)
  
  .then((response) => response.json())

  .then((data) => populateHTML(data))
  
  .catch((error) => {
    
    alert("Oh no! Somthing went wrong. We will fix this problem ASAP");
    console.log(error);
  });

function populateHTML(data) {
  console.log(data);
  
  console.log(data.results);

  resultsContainer.innerHTML = "";
 
  for (let i = 0; i < data.results.length; i++) {
    console.log(data.results[i].name);
    console.log(data.results[i].rating);
    console.log(data.results[i].tags);
    
    if (i === 8) {
      break;
    }

    resultsContainer.innerHTML += `<div class="result">${data.results[i].name}</div>`;
    resultsContainer.innerHTML += `<div class="result">${data.results[i].rating}</div>`;
    resultsContainer.innerHTML += `<div class="result">${data.results[i].tags}</div>`;
  }
};

