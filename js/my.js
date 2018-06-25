document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, options);
});
$(document).ready(function(){
    $('.collapsible').collapsible();
  });


var ctx = document.getElementById("competencesTech").getContext("2d");

var competencesTech = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Test d\'intrusion', 'Audit de code', 'Audit d\'application mobile', 'Test de robustesse', 'Développement'],
        datasets: [{
            backgroundColor: 'rgb(255, 99, 132, 0.2)',
            borderColor: '#ff6384',
            pointBackgroundColor: 'ff6384',
            label: 'Niveau actuel',
            data: [6, 4, 3, 4, 3]
        },
            {
                backgroundColor: 'rgb(54, 162, 235, 0.2)',
                borderColor: "#36a2eb",
                pointBackgroundColor: '36a2eb',
                label: 'Objectif de progression',
                data: [10, 8, 7, 6, 9]
            }]
    },

    options: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Objectif d\'évolution de mes compétences sur deux ans'
        },
        scale: {
            ticks: {
                beginAtZero: true
            }
        },
        responsive: true

    }

});



var cttx = document.getElementById("competencesHumaines").getContext("2d");

var competencesHumaines = new Chart(cttx, {
    type: 'radar',
    data: {
        labels: ['Rendre compte', 'Parole en public', 'Se former', 'Etre autonome', 'Pédagogie'],
        datasets: [{
            backgroundColor: 'rgb(75, 192, 192, 0.2)',
            borderColor: 'rgb(75, 192, 192)',
            pointBackgroundColor: 'rgb(75, 192, 192)',
            label: 'Niveau actuel',
            data: [5, 4, 5, 6, 4]
        },
            {
                backgroundColor: 'rgb(255, 205, 86, 0.2)',
                borderColor: 'rgb(255, 205, 86)',
                pointBackgroundColor: 'rgb(255, 205, 86)',
                label: 'Objectif de progression',
                data: [7, 8, 9, 10, 7]
            }]
    },

    options: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Objectif d\'évolution de mes compétences sur deux ans'
        },
        scale: {
            ticks: {
                beginAtZero: true
            }
        },
        responsive: true

    }

});