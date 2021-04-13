var hoteisJSON;

let url = 'https://api.sheety.co/44ee440866293e92ee186dcd40ac7fdf/sheetyApiSenai/hoteis';
fetch(url)
.then((response) => response.json())
.then(json => {
  hoteisJSON = json.hoteis;
  console.log(json.hoteis);
  criaCard();
});

function criaCard(){
  document.getElementById(`catalogo`).innerHTML = "";
  for(let i = 0; i < hoteisJSON.length; i++){
    document.getElementById(`catalogo`).innerHTML += `
    <div class="w3-card-4" style="width:20%; margin:15px">
      <img src="${hoteisJSON[i].imagem}" alt="Alps" style="width:100%">
        <div class="w3-container w3-center">
            <p>${hoteisJSON[i].nomeDoHotel} (${hoteisJSON[i].tipoQuarto})</p>
        </div>
      </div>
    `
  }
}