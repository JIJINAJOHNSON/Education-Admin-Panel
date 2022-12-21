var ctx = document.getElementById('lineChart').getContext('2d');
var doughnut = document.getElementById('doughnut').getContext('2d');
var lineChart = new Chart(ctx, {
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
var lineChart = new Chart(doughnut, {
    type: 'doughnut',
    data: {
        labels: ['Academics', 'Non-Academics', 'Administration', 'Others' ],
        datasets: [{
            label: 'Employees',
            data: [42,12, 8, 6],
            backgroundColor: [
                'rgba(41, 155, 99, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(120, 46, 139, 1)'
                
            ],
            borderColor: [
                'rgba(41, 155, 99, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(120, 46, 139, 1)'
                
            ],
            borderWidth: 1
        }]
    },
    options: {
       responsive:true
    }
});