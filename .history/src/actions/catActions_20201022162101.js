// write and export your action creator function here

function fetchCats() {
    fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
    .then(response => {return response.json()})
    .then(responseJSON => {type: 'LOADING_CATS',responseJSON})
}

export default fetchCats;