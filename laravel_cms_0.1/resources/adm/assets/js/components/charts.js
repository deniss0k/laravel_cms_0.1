
$(function() {

    "use strict";

    /**
     * Charts
     * Docs: https://github.com/chartjs/Chart.js
     */


    /* Line Chart
    ===========================*/
    // var usersCtx = $("#js-clients-chart");
    //
    // var $data = [1900, 3000, 3400, 2200, 2900, 3900, 2500, 3800, 4100, 3800, 3200, 2900];
    // var $data2 = [1231, 1231, 4444, 645, 2222, 3333, 4444, 5555, 1233, 1233, 2123, 2900];
    // var $labels = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OKT", "NOV", "DEC"];
    //
    // if(usersCtx.length > 0) {
    //     Chart.defaults.global.legend.labels.usePointStyle = true;
    //
    //     var studentsChart = new Chart(usersCtx, {
    //         type: 'line',
    //         data: {
    //             labels: $labels,
    //             datasets: [{
    //                 // lineTension: 0,
    //                 borderColor: '#102133',
    //                 pointRadius: 5,
    //                 pointHoverRadius: 5,
    //                 pointBorderWidth: 2,
    //                 pointBorderColor: '#3e3e3e',
    //                 pointStyle: 'circle',
    //                 data: $data,
    //                 // backgroundColor: '#102133',
    //                 borderWidth: 1,
    //                 label: 'Users'
    //             },{
    //                 // lineTension: 0,
    //                 label: 'Line Dataset',
    //                 data: $data2,
    //                 pointRadius: 5,
    //                 pointHoverRadius: 5,
    //                 pointBorderWidth: 2,
    //                 pointBorderColor: '#000',
    //                 pointStyle: 'circle',
    //                 // Changes this dataset to become a line
    //                 type: 'line'
    //             }],
    //
    //             dataLabels: [{
    //                 color: 'white'
    //             }]
    //         },
    //
    //         options: {
    //             layout: {
    //                 padding: {
    //                     left: 0,
    //                     right: 0,
    //                     top: 20,
    //                     bottom: 0
    //                 }
    //             },
    //             legend: {
    //                 display: true,
    //                 borderWidth: 1,
    //                 padding: 0
    //             },
    //             maintainAspectRatio: false,
    //
    //             scales: {
    //                 yAxes: [{
    //                     // ticks: {
    //                     //     display: false
    //                     // },
    //                     // gridLines: {
    //                     //     display: false
    //                     // }
    //
    //                 }],
    //                 xAxes: [{
    //                     ticks: {
    //                         fontFamily: "'Open Sans', sans-serif",
    //                         fontColor: '#3e3e3e',
    //                         fontSize: 14,
    //                         fontWeight: 700
    //
    //                     },
    //                     gridLines: {
    //                         display: false
    //                     }
    //                 }]
    //             },
    //
    //             // plugins: {
    //             //     datalabels: {
    //             //         align: function(context) {
    //             //             var index = context.dataIndex;
    //             //             var value = context.dataset.data[index];
    //             //             var invert = Math.abs(value) <= 1;
    //             //             return value < 1 ? 'end' : 'start'
    //             //         },
    //             //         anchor: 'top',
    //             //
    //             //         color: '#3e3e3e',
    //             //         font: {
    //             //             size: 14,
    //             //             weight: 700
    //             //         },
    //             //
    //             //         clip: false,
    //             //         offset: -25,
    //             //         padding: 0,
    //             //         formatter: function(value) {
    //             //             return Math.round(value * 10) / 10
    //             //         }
    //             //     }
    //             // }
    //         }
    //     });
    // }

    /* Pie
    ===========================*/

    var browsersCtx = $("#browsers-chart");

    if(browsersCtx.length > 0) {

        var data = {
            labels: [
                "Chrome",
                "Mozilla",
                "IE"
            ],
            datasets: [
                {
                    data: [300, 200, 50],
                    backgroundColor: [
                        "#f24b4b",
                        "#f0b15c",
                        "#359ce6"
                    ],
                    hoverBackgroundColor: [
                        "#e63838",
                        "#e5a146",
                        "#248bd6"
                    ]
            }]
        };

        var myPieChart = new Chart(browsersCtx,{
            type: 'pie',
            data: data,
            options: {
                cutoutPercentage: 0
            }
        });
    }

});


