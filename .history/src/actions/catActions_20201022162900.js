// write and export your action creator function here

export function fetchCats() {
    return dispatch => {
        dispatch({type: 'LOADING_CATS'});
        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
            .then(resp =>  resp.json())
            .then(json => dispatch({type: 'ADDING_CATS',cats: json.images}))
    }
}

