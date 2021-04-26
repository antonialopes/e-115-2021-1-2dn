// Objetos
var resultdia1, resultdia2;

// Dia 1
async function ResponseDia1() {

    function response(valor) {
        resultdia1 = valor;
    }

    await fetch("https://covid19-brazil-api.now.sh/api/report/v1", {
        "method": "GET"
    })
        .then(response => response.json())
        .then(data => response (data))
        .catch(err => console.error(err))
}

async function getResponse1() {
    await ResponseDia1();
}

// chamando as funções
// charts
async function gerarChart() {
    await getResponse1()
    const label = [
        resultdia1.data[0].uf,
        resultdia1.data[1].uf,
        resultdia1.data[2].uf,
        resultdia1.data[3].uf,
        resultdia1.data[4].uf,
        resultdia1.data[5].uf,
        resultdia1.data[6].uf,
        resultdia1.data[7].uf,
        resultdia1.data[8].uf,
        resultdia1.data[9].uf,
        resultdia1.data[10].uf,
        resultdia1.data[11].uf,
        resultdia1.data[12].uf,
        resultdia1.data[13].uf,
        resultdia1.data[14].uf,
        resultdia1.data[15].uf,
        resultdia1.data[16].uf,
        resultdia1.data[17].uf,
        resultdia1.data[18].uf,
        resultdia1.data[19].uf,
        resultdia1.data[20].uf,
        resultdia1.data[21].uf,
        resultdia1.data[22].uf,
        resultdia1.data[23].uf,
        resultdia1.data[24].uf,
        resultdia1.data[25].uf,
        resultdia1.data[26].uf,
    ];

     const data = {
        labels: label, 
        datasets: [{
            label: 'Casos COVID-19',
            backgroundColor: [
                'rgb(193 0 50)',
                 ],
            borderColor: ['rgb(193 0 50)',
                 ],

                 data: [resultdia1.data[0].cases, 
                   resultdia1.data[1].cases,
                   resultdia1.data[2].cases, 
                   resultdia1.data[3].cases,
                   resultdia1.data[4].cases,
                   resultdia1.data[5].cases,
                   resultdia1.data[6].cases, 
                   resultdia1.data[7].cases,
                   resultdia1.data[8].cases,
                   resultdia1.data[9].cases,
                   resultdia1.data[10].cases,
                   resultdia1.data[11].cases,
                   resultdia1.data[12].cases,
                   resultdia1.data[13].cases,
                   resultdia1.data[14].cases,
                   resultdia1.data[15].cases,
                   resultdia1.data[16].cases,
                   resultdia1.data[17].cases,
                   resultdia1.data[18].cases,
                   resultdia1.data[19].cases,
                   resultdia1.data[20].cases,
                   resultdia1.data[21].cases,
                   resultdia1.data[22].cases,
                   resultdia1.data[23].cases,
                   resultdia1.data[24].cases,
                   resultdia1.data[25].cases,
                   resultdia1.data[26].cases,]  
                }]
            };

    const config = {
        type: 'line',
        data,
        options: {
            title: {
                display: true,
                text: 'Casos COVID Brasil'
            }
        }
    };
    var myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}

gerarChart()





