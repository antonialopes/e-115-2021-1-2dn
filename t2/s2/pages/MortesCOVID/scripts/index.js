// Objetos
var resultSP, resultMG, resultRJ, resultAC;

// Resposta para SP
async function ResponseSP() {

    function response(valor) {
        resultSP = valor;
    }

    await fetch("https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/sp", {
        "method": "GET"
    })
        .then(response => response.json())
        .then(data => response(data))
        .catch(err => console.error(err))
}

async function getResponseSP() {
    await ResponseSP();
}


// Resposta para MG 
async function ResponseMG() {

    function response(valor) {
        resultMG = valor;
    }

    await fetch("https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/mg", {
        "method": "GET"
    })
        .then(response => response.json())
        .then(data => response(data))
        .catch(err => console.error(err))
}

async function getResponseMG() {
    await ResponseMG()
}

// Resposta para RJ 
async function ResponseRJ() {

    function response(valor) {
        resultRJ = valor;
    }

    await fetch("https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/rj", {
        "method": "GET"
    })
        .then(response => response.json())
        .then(data => response(data))
        .catch(err => console.error(err))
}

async function getResponseRJ() {
    await ResponseRJ()
}

// Resposta para AC
async function ResponseAC() {

    function response(valor) {
        resultAC = valor;
    }

    await fetch("https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/ac", {
        "method": "GET"
    })
        .then(response => response.json())
        .then(data => response(data))
        .catch(err => console.error(err))
}

async function getResponseAC() {
    await ResponseAC()
}

// chamando as funções



// charts
async function gerarChart() {

    await getResponseSP()
    await getResponseMG()
    await getResponseRJ()
    await getResponseAC()

    const labels = [
        resultSP.state,
        resultMG.state,
        resultRJ.state,
        resultAC.state,
    ];
    const data = {
        labels: labels,
        datasets: [{
            label: 'Mortes por região',
            backgroundColor: [
                'rgb(255,255,0)',
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255,127,80)'
            ],
            borderColor: 'rgba(255,255,255,0)',
            data: [resultSP.deaths, resultMG.deaths, resultRJ.deaths, resultAC.deaths],
        }]
    };

    const config = {
        type: 'pie',
        data,
        options: {
            title: {
                display: true,
                text: 'Mortes por região'
            }
        }
    };
    var myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}

gerarChart()