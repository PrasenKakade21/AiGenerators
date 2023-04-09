const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '398476559cmsh2fa2a72a6ac4389p17b3e5jsnf4d517da5e14',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
};

fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        document.getElementById("quote").innerHTML = response.content;
        document.getElementById("author").innerHTML = "Author- "+response.originator.name;

    })
    .catch(err => console.error(err));