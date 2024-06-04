const ctx = document.getElementById('linechart');
const ctx2 = document.getElementById('line-chart-2');
const ctx3 = document.getElementById('line-chart-3');
const ctx4 = document.getElementById('line-chart-4');

Chart.defaults.color = "white";

new Chart(ctx,{

    type:'line',
    data:{
      
        labels:['6 May','','','','','','','','','2 June'],
        datasets:[
            {
                label:"Views This Month",
                data:[50,36,45,48,52,73,120,60,98,85,80],
                borderWidth: 1
            }
        ]
    },
    options: {
    
        scales: {
            y: {
                beginAtZero: true
            }
        }
        }

})

new Chart(ctx2,{

    type:'line',
    data:{
      
        labels:['6 May','','','','','','','','','2 June'],
        datasets:[
            {
                label:"Watch Time (hours)",
                data:[0.8,0.9,2.8,1.1,1.5,0.8,1.4,2.1,0.8,1.7,1],
                borderWidth: 1,
                borderColor: 'rgb(255, 99, 132)',  // Change line color here
                tension: 0.1
            }
        ]
    },
    options: {
    
        scales: {
            y: {
                beginAtZero: true
            }
        }
        }

})

new Chart(ctx3,{

    type:'line',
    data:{
      
        labels:['6 May','','','','','','','','','2 June'],
        datasets:[
            {
                label:"Subscribers This month",
                data:[-1,0,-8,-2,0,-4,0,-2,3,-1,80],
                borderWidth: 1
            }
        ]
    },
})

new Chart(ctx4,{

    type:'line',
    data:{
      
        labels:['6 May','','','','','','','','','2 June'],
        datasets:[
            {
                label:"New Viewers",
                data:[40,29,40,38,30,60,45,40,70,43,54],
                borderWidth: 1
            },
            {
                label:"Returning Viewers",
                data:[0,4,12,8,7,9,0,3,2,4,9],
                borderWidth: 1
            }
        ]
    },
})






   



