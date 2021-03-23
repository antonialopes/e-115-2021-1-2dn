  // Atribui a classe "memory-card" dentro da constante: "cards" 
  const cards = document.querySelectorAll('.memory-card'); 

  var deckmarvel // Criando uma variavel pra fazer uso dela dentro do vetor
  fetch("./json/deckmarvel.json") // Caminho do nosso diretório de imagens 
  .then(response => response.json())
  .then(data => { deckmarvel = data
  })
  
  var deckdc
  fetch("./json/deckdc.json") // Criando uma variavel pra fazer uso dela dentro do vetor
  .then(response => response.json()) // Caminho do nosso diretório de imagens 
  .then(data => { deckdc = data
  })

  /* LET = Variavel local. só funciona dentro do do Bloco*/
  let hasFlippedCard = false; 
  let lockBoard = false; // Inicia em "False" para liberar as cartas
  let firstCard, secondCard;

  function flipCard() { // Função para mudança das cartas 
    if (lockBoard) return; // Bloquear a virada da 3° cartão
   if (this === firstCard) return; 

    this.classList.add('flip');

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;
    checkForMatch();
    pontos();
  }

  // Função para checagem de duas cartas (firstCard, secondCard) se retornar verdadeiro ou false
  function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
// Pergunta, se for "True" habilita a Função de manter as duas cartas viradas, caso "false" habilita a função de virar as cartas;
    isMatch ? disableCards() : unflipCards(); 
  }

  function disableCards() { // Desabilita as Funções da 1° e 2° carta;
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

   resetBoard();
  }

  // Desabilita a função flip caso as imagens seja diferentes
  function unflipCards() {
    lockBoard = true;

  // Desabilita a função flip caso as imagens seja diferentes
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

     resetBoard();
    }, 1500);
  }
  
  // Limpa, atribui "false" e "null" as variaveis após executar as funções
 function resetBoard() { 
   [hasFlippedCard, lockBoard] = [false, false];
   [firstCard, secondCard] = [null, null];
 }

// Altera a posição de cada card
  (function shuffle() {
   cards.forEach(card => { 
     let ramdomPos = Math.floor(Math.random() * 12); // Cada card vai receber um numero randomico
     card.style.order = ramdomPos;
   });
 })();

  cards.forEach(card => card.addEventListener('click', flipCard));


/*
    for (var i; i < 12; i++){
    document.getElementsByClassName("cartas")[i].src=deckdc.cartas[i]
    document.getElementsByClassName("cartas2")[i].src=deckdc.cartas2[0]
  }
*/
 
/*
    for (var i; i < 12; i++){
      document.getElementsByClassName("cartas")[i].src=deckmarvel.cartas[i]
      document.getElementsByClassName("cartas2")[i].src=deckmarvel.cartas2[0]
  }
*/
function trocaTemaMarvel(){

/* ---------------- Troca cartas - Jogo DC ------------------------*/

    document.getElementsByClassName("cartas")[0].src=deckdc.cartas[0]
    document.getElementsByClassName("cartas")[1].src=deckdc.cartas[1]
    document.getElementsByClassName("cartas")[2].src=deckdc.cartas[2]
    document.getElementsByClassName("cartas")[3].src=deckdc.cartas[3]
    document.getElementsByClassName("cartas")[4].src=deckdc.cartas[4]
    document.getElementsByClassName("cartas")[5].src=deckdc.cartas[5]
    document.getElementsByClassName("cartas")[6].src=deckdc.cartas[6]
    document.getElementsByClassName("cartas")[7].src=deckdc.cartas[7]
    document.getElementsByClassName("cartas")[8].src=deckdc.cartas[8]
    document.getElementsByClassName("cartas")[9].src=deckdc.cartas[9]
    document.getElementsByClassName("cartas")[10].src=deckdc.cartas[10]
    document.getElementsByClassName("cartas")[11].src=deckdc.cartas[11]

    document.getElementsByClassName("cartas2")[0].src=deckdc.cartas2[0]
    document.getElementsByClassName("cartas2")[1].src=deckdc.cartas2[0]
    document.getElementsByClassName("cartas2")[2].src=deckdc.cartas2[0]
    document.getElementsByClassName("cartas2")[3].src=deckdc.cartas2[0]
    document.getElementsByClassName("cartas2")[4].src=deckdc.cartas2[0]
    document.getElementsByClassName("cartas2")[5].src=deckdc.cartas2[0]
    document.getElementsByClassName("cartas2")[6].src=deckdc.cartas2[0]
    document.getElementsByClassName("cartas2")[7].src=deckdc.cartas2[0]
    document.getElementsByClassName("cartas2")[8].src=deckdc.cartas2[0]
    document.getElementsByClassName("cartas2")[9].src=deckdc.cartas2[0]
    document.getElementsByClassName("cartas2")[10].src=deckdc.cartas2[0]
    document.getElementsByClassName("cartas2")[11].src=deckdc.cartas2[0]

}

function trocaTemaDc(){ 
    
/* ------------------- Troca cartas - Jogo Marvel --------------------------*/

    document.getElementsByClassName("cartas")[0].src=deckmarvel.cartas[0]
    document.getElementsByClassName("cartas")[1].src=deckmarvel.cartas[1]
    document.getElementsByClassName("cartas")[2].src=deckmarvel.cartas[2]
    document.getElementsByClassName("cartas")[3].src=deckmarvel.cartas[3]
    document.getElementsByClassName("cartas")[4].src=deckmarvel.cartas[4]
    document.getElementsByClassName("cartas")[5].src=deckmarvel.cartas[5]
    document.getElementsByClassName("cartas")[6].src=deckmarvel.cartas[6]
    document.getElementsByClassName("cartas")[7].src=deckmarvel.cartas[7]
    document.getElementsByClassName("cartas")[8].src=deckmarvel.cartas[8]
    document.getElementsByClassName("cartas")[9].src=deckmarvel.cartas[9]
    document.getElementsByClassName("cartas")[10].src=deckmarvel.cartas[10]
    document.getElementsByClassName("cartas")[11].src=deckmarvel.cartas[11]

    document.getElementsByClassName("cartas2")[0].src=deckmarvel.cartas2[0]
    document.getElementsByClassName("cartas2")[1].src=deckmarvel.cartas2[0]
    document.getElementsByClassName("cartas2")[2].src=deckmarvel.cartas2[0]
    document.getElementsByClassName("cartas2")[3].src=deckmarvel.cartas2[0]
    document.getElementsByClassName("cartas2")[4].src=deckmarvel.cartas2[0]
    document.getElementsByClassName("cartas2")[5].src=deckmarvel.cartas2[0]
    document.getElementsByClassName("cartas2")[6].src=deckmarvel.cartas2[0]
    document.getElementsByClassName("cartas2")[7].src=deckmarvel.cartas2[0]
    document.getElementsByClassName("cartas2")[8].src=deckmarvel.cartas2[0]
    document.getElementsByClassName("cartas2")[9].src=deckmarvel.cartas2[0]
    document.getElementsByClassName("cartas2")[10].src=deckmarvel.cartas2[0]
    document.getElementsByClassName("cartas2")[11].src=deckmarvel.cartas2[0]
 
  }
  
  var tentativas = 0;
  var text = "Tentativas : ";

  function pontos(){
    if('flip'){
      tentativas++;
    }
    let cont = document.getElementById("contador");
    cont.innerHTML = text + tentativas;
  }

  

