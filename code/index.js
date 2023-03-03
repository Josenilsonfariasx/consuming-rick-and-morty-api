

const receber = function (){
    const container = document.querySelector('.container')

fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const results = data.results
    results.forEach(results => {
    container.innerHTML += `<div class='card'>
                                <img src='${results.image}'>
                                <h3>
                                    ${results.name}
                                <h3>
                            </div>`
    });
  })
  .catch(error => console.error(error));

}

receber();