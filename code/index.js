

const receber = function (){
    const container = document.querySelector('.container')
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');
    const input = document.querySelector('input[type="search"]');

    const images = document.querySelectorAll('img');

fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    // console.log(data)
    const results = data.results
    results.forEach(results => {
    container.innerHTML += `<div class='card'>
                                <img src='${results.image}'>
                                <h3>
                                    ${results.name}
                                </h3>
                                <button id='modal'>
                                    Details
                                </button>
                            </div>`

});
var myButtons = document.querySelectorAll('button');

myButtons.forEach((button, index) => {

  console.log(myButtons.index)

  button.addEventListener('click', () => {
    const result = results[index]
    modal.style.display= 'block';
    modalContent.querySelector('#modal-image').src=result.image;
    modalContent.querySelector('#modal-name').textContent = result.name;
    modalContent.querySelector('#modal-status').textContent = `Status: ${result.status}`;
    modalContent.querySelector('#modal-specie').textContent = `Specie: ${result.species}`
    modalContent.querySelector('#modal-origin').textContent = `Origin: ${result.origin.name}`
ontent.querySelector('#modal-type').textContent = `Type: ${result.type}`;
    console.log(results.image)
    
  });
});


input.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    const searchTerm = input.value;
    const searchResults = [];

    fetch(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        const results = data.results;
        results.forEach(result => {
          searchResults.push(`
            <div class='card'>
              <img src='${result.image}'>
              <h3>
                ${result.name}
              </h3>
              <button id='modal'>
                Details
              </button>
            </div>
          `);
        });

        container.innerHTML = searchResults.join('');
      })
      .catch(error => console.error(error));
  }
});



modalContent.querySelector('.close').addEventListener('click', () => {
  modal.style.display = 'none';
});

  })
  .catch(error => console.error(error));

};
receber();