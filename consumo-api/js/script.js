var url = "https://www.cheapshark.com/api/1.0/games?id=612"
fetch(url)
    .then(response => response.json())

    .then(json => {
        console.log(json);
    })