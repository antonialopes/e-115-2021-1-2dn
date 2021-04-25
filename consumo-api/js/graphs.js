function pesquisaJogo() {

    let gameName = document.getElementById("searchGame").value

    var url = `https://www.cheapshark.com/api/1.0/deals?title=${gameName}`

    var classes = ["de linha", "de barra", "de radar", "de donut", "polar"]

    console.log(url)
    fetch(url)

        .then(response => response.json())

        .then(json => {
            var nameJSON = json[0].title
            var games = json;
            gameName = nameJSON
            console.log(games)
            console.log(gameName)

            if (gameName.myChart != null) {
                gameName.myChart.destroy()
            }

            function geraGraphCard() {

                var nomeJogo = gameName
                var id = ["myChart1", "myChart2", "myChart3", "myChart4", "myChart5"]
                var container = document.getElementById(`gridGraphs`)
                container.innerHTML = ""
                for (let i = 0; i < id.length; i++) {
                    container.innerHTML +=
                        `
                <div class="col">
                    <div class="card">
                        <canvas class="${classes[i]}" id=${id[i]}></canvas>
                        <div class="card-body">
                            <h5 class="card-title">${nomeJogo}</h5>
                            <p class="card-text">Nesse gráfico ${classes[i]} é mostrado a diferença de preços do jogo ${nomeJogo} em diferentes lojas.</p>
                        </div>
                    </div>
                `
                }
            }

            geraGraphCard()

            var ctx = document.getElementById('myChart1').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['loja 1', 'loja 2', 'loja 3', 'loja 4', 'loja 5'],
                    datasets: [{
                        label: nameJSON,
                        data: [games[0].normalPrice, games[1].normalPrice, games[2].normalPrice, games[3].normalPrice, games[4].normalPrice],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }

            });
            ctx = document.getElementById('myChart2').getContext('2d');
            myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['loja 1', 'loja 2', 'loja 3', 'loja 4', 'loja 5'],
                    datasets: [{
                        label: nameJSON,
                        data: [games[0].normalPrice, games[1].normalPrice, games[2].normalPrice, games[3].normalPrice, games[4].normalPrice],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }

            });
            ctx = document.getElementById('myChart3').getContext('2d');
            myChart = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: ['loja 1', 'loja 2', 'loja 3', 'loja 4', 'loja 5'],
                    datasets: [{
                        label: nameJSON,
                        data: [games[0].normalPrice, games[1].normalPrice, games[2].normalPrice, games[3].normalPrice, games[4].normalPrice],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }

            });
            ctx = document.getElementById('myChart4').getContext('2d');
            myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['loja 1', 'loja 2', 'loja 3', 'loja 4', 'loja 5'],
                    datasets: [{
                        label: nameJSON,
                        data: [games[0].normalPrice, games[1].normalPrice, games[2].normalPrice, games[3].normalPrice, games[4].normalPrice],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
            ctx = document.getElementById('myChart5').getContext('2d');
            myChart = new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: ['loja 1', 'loja 2', 'loja 3', 'loja 4', 'loja 5'],
                    datasets: [{
                        label: nameJSON,
                        data: [games[0].normalPrice, games[1].normalPrice, games[2].normalPrice, games[3].normalPrice, games[4].normalPrice],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }

            });
        })
}