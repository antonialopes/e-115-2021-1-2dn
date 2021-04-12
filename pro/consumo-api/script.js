let url = 'https://api.sheety.co/44ee440866293e92ee186dcd40ac7fdf/sheetyApiSenai/hoteis';
fetch(url)
.then((response) => response.json())
.then(json => {
  // Do something with the data
  console.log(json.hoteis);
});