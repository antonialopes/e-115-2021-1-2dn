function pesquisaJogo(){
    let gamename = document.getElementById("searchGame").value
    var url = `https://www.cheapshark.com/api/1.0/deals?title=${gamename}`
    
    console.log(url)
    fetch(url)

    .then(response => response.json())

    .then(json => {
        let namejson = json[0].title
        var games = json;
        console.log(games);
        

        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart1 = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['loja 1', 'loja 2', 'loja 3', 'loja 4', 'loja 5',],
                datasets: [{
                    label: namejson,
                    data: [games[0].dealRating, games[1].dealRating, games[2].dealRating, games[3].dealRating, games[4].dealRating],
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
                labels: ['loja 1', 'loja 2', 'loja 3', 'loja 4', 'loja 5',],
                datasets: [{
                    label: namejson,
                    data: [games[0].dealRating, games[1].dealRating, games[2].dealRating, games[3].dealRating, games[4].dealRating],
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
                labels: ['loja 1', 'loja 2', 'loja 3', 'loja 4', 'loja 5',],
                datasets: [{
                    label: namejson,
                    data: [games[0].dealRating, games[1].dealRating, games[2].dealRating, games[3].dealRating, games[4].dealRating],
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
                labels: ['loja 1', 'loja 2', 'loja 3', 'loja 4', 'loja 5',],
                datasets: [{
                    label: namejson,
                    data: [games[0].dealRating, games[1].dealRating, games[2].dealRating, games[3].dealRating, games[4].dealRating],
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


var ids = ["myChart1", "myChart2", "myChart3", "myChart4"]
var classes = ["line-chart", "bar-chart", "radar-chart", "doughnut-chart"]

function geraGraphCard() {
    
    
    var container = document.getElementById(`gridGraphs`)
    container.innerHTML = ""
    for (let i = 0; i < ids.length; i++) {
        container.innerHTML += 
        `
        <div class="col">
            <div class="card">
                <canvas class="${classes[i]}" id=${ids[i]}></canvas>
                <div class="card-body">
                    <h5 class="card-title">$</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                </div>
            </div>
        `
    }
}

geraGraphCard()






