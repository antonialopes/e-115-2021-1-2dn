//OBJETO
var resUSA, resBR, resCN, resRU, resIN, resGB, resFR, resES  

//RESPOSTA ESTADOS UNIDOS
async function ResponseUSA(){

    function response(valor) {
        resUSA = valor;
    }
    await fetch("https://covid19-brazil-api.vercel.app/api/report/v1/us", {
        "method": "GET"
    })

        .then(response => response.json())
        .then(data => response(data))
        .catch(err => console.error(err))
}
async function getResponseUSA() {
    await ResponseUSA();
}
//RESPOSTA BRASIL
async function ResponseBR(){

    function response(valor) {
        resBR = valor;
    }
    await fetch("https://covid19-brazil-api.now.sh/api/report/v1/brazil", {
        "method": "GET"
    })

        .then(response => response.json())
        .then(data => response(data))
        .catch(err => console.error(err))
}
async function getResponseBR() {
    await ResponseBR();
}
//RESPOSTA CHINA
async function ResponseCN(){

    function response(valor) {
        resCN = valor;
    }
    await fetch("https://covid19-brazil-api.vercel.app/api/report/v1/china", {
        "method": "GET"
    })

        .then(response => response.json())
        .then(data => response(data))
        .catch(err => console.error(err))
}
async function getResponseCN() {
    await ResponseCN();
}
//RESPOSTA RUSSIA
async function ResponseRU(){

    function response(valor) {
        resRU = valor;
    }
    await fetch("https://covid19-brazil-api.vercel.app/api/report/v1/russia", {
        "method": "GET"
    })

        .then(response => response.json())
        .then(data => response(data))
        .catch(err => console.error(err))
}
async function getResponseRU() {
    await ResponseRU();
}
//RESPOTA INDIA 
async function ResponseIN(){

    function response(valor) {
        resIN = valor;
    }
    await fetch("https://covid19-brazil-api.vercel.app/api/report/v1/india", {
        "method": "GET"
    })

        .then(response => response.json())
        .then(data => response(data))
        .catch(err => console.error(err))
}
async function getResponseIN() {
    await ResponseIN();
}
//RESPOSTA REINO UNIDO
async function ResponseGB(){

    function response(valor) {
        resGB = valor;
    }
    await fetch("https://covid19-brazil-api.vercel.app/api/report/v1/United%20Kingdom", {
        "method": "GET"
    })

        .then(response => response.json())
        .then(data => response(data))
        .catch(err => console.error(err))
}
async function getResponseGB() {
    await ResponseGB();
}
//RESPOSTA FRANÇA
async function ResponseFR(){

    function response(valor) {
        resFR = valor;
    }
    await fetch("https://covid19-brazil-api.vercel.app/api/report/v1/france", {
        "method": "GET"
    })

        .then(response => response.json())
        .then(data => response(data))
        .catch(err => console.error(err))
}
async function getResponseFR() {
    await ResponseFR();
}
//RESPOSTA ESPANHA
async function ResponseES (){

    function response(valor) {
        resES  = valor;
    }
    await fetch("https://covid19-brazil-api.vercel.app/api/report/v1/Spain", {
        "method": "GET"
    })

        .then(response => response.json())
        .then(data => response(data))
        .catch(err => console.error(err))
}
async function getResponseES() {
    await ResponseES();
}

async function gerarChart() {

    await getResponseUSA()
    await getResponseBR()
    await getResponseCN()
    await getResponseRU()
    await getResponseIN()
    await getResponseGB()
    await getResponseFR()
    await getResponseES()

    const labels = [
        resUSA.data.country,
        resBR.data.country,
        resCN.data.country,
        resRU.data.country,
        resIN.data.country,
        resGB.data.country,
        resFR.data.country,
        resES.data.country,
    ];
  
  const data = {
    labels: labels,
    datasets: [{
      label: 'Paises com maiores numeros de casos',
      backgroundColor: ['rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'],
                    borderWidth: 2.5,
      data: [resUSA.data.confirmed, resBR.data.confirmed, resCN.data.confirmed, resRU.data.confirmed, resIN.data.confirmed, resGB.data.confirmed, resFR.data.confirmed, resES.data.confirmed],
    }
]
    
  };
  // </block:setup>
  
  // <block:config:0>
  const config = {
    type: 'bar',
    data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }},
       
    }
  };

  var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
}
gerarChart();