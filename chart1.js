const ctx = document.getElementById('lineChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            label: 'Earnings in $',
            data: [1200, 1900, 3000, 2500, 2000, 3000,1900,1500,4000,1500,2100,4500],
            backgroundColor: [
                'rgba(85, 85, 85, 1)'
                
            ],
            borderColor: [
                'rgb(41, 155, 99)'
                
            ],
            borderWidth: 1
        }]
    },
    options: {
       responsive:true
    }
});