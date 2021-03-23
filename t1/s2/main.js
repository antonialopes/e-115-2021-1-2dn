var tamanho
const cardBoard = document.querySelector("#cardBoard");
var logo = document.getElementById("logo-site")

var contador = 0
const pokemon = [
  'abra.png','articuno.png','bulbasauro.png','chansey.png','charmander.png','chikorita.png','clefairy.png','cubone.png','diglett.png','ditto.png','dratini.png','eevee.png','exeggcute.png','gastly.png','geodude.png','growlithe.png','hitmonchan.png', 'hitmonlee.png', 'horsea.png', 'jigglypuff.png', 'jynx.png','koffing.png','krabby.png','lapras.png', 'machop.png','magikarp.png','meowth.png','mewtwo.png', 'moltres.png', 'mrmime.png', 'oddish.png','omanyte.png','onix.png','pikachu.png','poliwag.png','ponyta.png','porygon.png','psyduck.png','rattata.png','seel.png','shellder.png','slowpoke.png','snorlax.png','squirtle.png','staryu.png','tangela.png','vulpix.png','zapdos.png'
];

const lol = [
  'aatrox.png','ahri.png','akali.png','alistar.png','amumu.png','anivia.png','annie.png','ashe.png','aurelion-sol.png','azir.png','bard.png','blitzcrank.png','brand.png','braum.png','caitlyn.png','camille.png','cassiopeia.png','chogath.png','corki.png','darius.png','diana.png','draven.png','dr-mundo.png','ekko.png','elise.png','evelynn.png','ezreal.png','fiddlesticks.png','fiora.png','fizz.png','galio.png','gangplank.png','garen.png','gnar.png','gragas.png','graves.png','hecarim.png','heimerdinger.png','illaoi.png','irelia.png','ivern.png','janna.png','jarvan-iv.png','jax.png','jayce.png','jhin.png','jinx.png','kaisa.png'
]

const marvel = [
  'capita-marvel.png','capitao-america.png','charles.png','coisa.png','deadpool.png','doutor-estranho.png','gamora.png','gaviao-arqueiro.png','groot.png','homem-aranha.png','homem-de-ferro.png','homem-formiga.png','hulk.png','jean-grey.png','logan.png','loki.png','magneto.png','mulher-invisivel.png','nebulosa.png','noturno.png','odin.png','pantera-negra.png','pietro.png','rocket.png','scott.png','senhor-das-estrelas.png','senhor-fantastico.png','shuri.png','tempestade.png','thanos.png','thor.png','tocha-humana.png','vampira.png','venom.png','vespa.png','visao.png','viuva-negra.png','wanda.png'
]

/* Fim renderização do HTML */

function alteraTema(){
  let tema = document.getElementById("temas").value
  let dificuldade = document.getElementById("dificuldade").value

  switch(tema){
    case "pokemon":
      deck = pokemon;
      contador = 0
      document.getElementById("contador").textContent = `Tentativas: ${contador}`
      logo.src = "./img/logos/logo-pokemon.png"
      break;
    case "lol":
      deck = lol;
      contador = 0
      document.getElementById("contador").textContent = `Tentativas: ${contador}`
      logo.src = "./img/logos/logo-lol.png"
      break;
    case "marvel":
      deck = marvel;
      contador = 0
      document.getElementById("contador").textContent = `Tentativas: ${contador}`
      logo.src = "./img/logos/logo-marvel.png"
      break;
  }

  switch(dificuldade){
    case "facil":
      dificuldade = 6;
      tamanho = dificuldade;
      contador = 0
      document.getElementById("contador").textContent = `Tentativas: ${contador}`
      break;
    case "medio":
      dificuldade = 12;
      tamanho = dificuldade; 
      contador = 0
      document.getElementById("contador").textContent = `Tentativas: ${contador}`
      break;
    case "dificil":
      dificuldade = 24;
      tamanho = dificuldade;
      contador = 0
      document.getElementById("contador").textContent = `Tentativas: ${contador}`
      break;
  }
  aplicaTema()
 
}

function aplicaTema(){

  let cardHTML = '';
  
  if(deck == pokemon){
    for (let i = 0; i < tamanho; i++) {
      cardHTML += `
      <div class="memory-card" data-card="${pokemon[i]}">
        <img class="front-card" src="img/pokemon/${pokemon[i]}">
        <div class="back-card">
        <img class="img-backcard" src="img/pokemon/logo-card.png">
        </div>
      </div>
    `
      
    }
    
}
else if(deck == lol){
  for (let i = 0; i < tamanho; i++) {
    cardHTML += `
      <div class="memory-card" data-card="${lol[i]}">
        <img class="front-card" src="img/lol/${lol[i]}">
        <div class="back-card">
        <img class="img-backcard" src="img/lol/leagueoflegends.png">
        </div>
      </div>
     `
  }
}
else{
  for (let i = 0; i < tamanho; i++) {
    cardHTML += `
      <div class="memory-card" data-card="${marvel[i]}">
        <img class="front-card" src="img/marvel/${marvel[i]}">
        <div class="back-card">
        <img class="img-backcard" src="img/marvel/marvel.png">
        </div>
      </div>
     `
  }
}
  
  cardBoard.innerHTML = cardHTML + cardHTML;

  const cards = document.querySelectorAll('.memory-card');

let firstCard, secondCard;
let lockCard = false;

function flipCard(){
  if(lockCard) return false;
  this.classList.add('flip');

  if(!firstCard){
  firstCard = this;

  return false;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch(){
  let isMatch = firstCard.dataset.card === secondCard.dataset.card;

  !isMatch ? disableCards(): resetCards(isMatch)

  if(!isMatch || isMatch){
    contador +=1
  }
  document.getElementById("contador").textContent = `Tentativas: ${contador}`
}

function disableCards(){
  lockCard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetCards();
  }, 1000);
  
}

(function shuffle(){
  cards.forEach(card => {
    let rand = Math.floor(Math.random() * 12);
    card.style.order = rand;
  });
})();

function resetCards(isMatch = false){
  if(isMatch){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
  }
  [firstCard, secondCard, lockCard] = [null, null, false];
}

cards.forEach(card => card.addEventListener('click', flipCard));
  
}

