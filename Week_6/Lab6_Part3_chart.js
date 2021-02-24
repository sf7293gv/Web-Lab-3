

let chartCanvas = document.querySelector('#chart')
let ctx = chartCanvas.getContext('2d')


bridges = [ // an array that contains 5 objects that contain information about the bridges
    {name: "Verrazano-Narrows Bridge", cityState: "New York, NY", span: 1298.4, coordiantes: [40.6066, -74.0447]},
    {name: "Golden Gate Bridge", cityState: "San Francisco and Marin, CA", span: 1280.2, coordiantes: [37.8199, -122.4783]},
    {name: "Mackinac Bridge", cityState: "Mackinaw and St Ignace, MI", span: 1158.0, coordiantes: [45.8174, -84.7278]},
    {name: "George Washington Bridge", cityState: "New York, NY and New Jersey, NJ", span: 1067.0, coordiantes: [40.8517, -73.9527]},
    {name: "Tacoma Narrows Bridge", cityState: "Tacoma and Kitsap, WA", span: 853.44, coordiantes: [47.2690, -122.5517]}
]

let barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [
            {
                label: 'Span Length',
                data: [],
                backgroundColor: ['red', 'blue', 'black', 'yellow', 'green']
            }
        ],
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})

bridges.forEach(function (b) {
    barChart.data.labels.push(b.name);
    barChart.data.datasets[0].data.push(b.span);
});