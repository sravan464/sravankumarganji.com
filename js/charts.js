
//my skills JavaScripts
$(function () {
    //$('#container').highcharts({
    //    chart: {
    //        type: 'column'
    //    },
    //    title: {
    //        text: 'Skill Set '
    //    },
    //    subtitle: {
    //        text: '/Measuring with 10/'
    //    },
    //    xAxis: {
    //        categories: [
    //            'HTML',
    //            'CSS',
    //            'JavaScript',
    //            'Jquery',
    //            'AJAX',
    //            'AngularJS',
    //            'NodeJS',
    //            'Java',
    //            'Scala',
    //            'RESTful webservices',
    //            'SOAP webservices',
    //            'RDBMS(Oracle/SQL)',
    //            'NO Sql(MongoDB/Apache Cassandra)',
    //            'Graph DB(Neo4J/levelDB)'
    //        ],
    //        crosshair: true
    //    },
    //    yAxis: {
    //        min: 0,
    //        title: {
    //            text: ''
    //        }
    //    },
    //    tooltip: {
    //        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    //        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
    //            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
    //        footerFormat: '</table>',
    //        shared: true,
    //        useHTML: true
    //    },
    //    plotOptions: {
    //        column: {
    //            pointPadding: 0.2,
    //            borderWidth: 0
    //        }
    //    },
    //    series: [{

    //        name: 'Skills Set',
    //        data: [9.0, 9.0, 8.0, 8.0, 7.0, 7.0, 7.0, 9.0, 5.0, 8.0, 8.0 , 7.0,6.0,5.0]

    //    }, {
    //        name: 'Years Of Exp',
    //        data: [8.0, 8.0, 7.0, 6.0, 5.0, 3.0, 0.5, 8.0, 0.5, 6.5, 6.0, 6.0,1.5,0.5]

    //    }]
    //            'CSS',
    //            'JavaScript',
    //            'Jquery',
    //            'AJAX',
    //            'AngularJS',
    //            'NodeJS',
    //            'Java',
    //            'Scala',
    //            'RESTful webservices',
    //            'SOAP webservices',
    //            'RDBMS(Oracle/SQL)',
    //            'NO Sql(MongoDB/Apache Cassandra)',
    //            'Graph DB(Neo4J/levelDB)'
    //});

    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Skills', 'Skill Set', 'Year of Exp'],
          ['HTML',9.0,5.0],
          ['CSS', 8.0, 5.0],
          ['JS(ES5)', 9.0, 7.0],
          ['JS(ES6)', 9.0, 2.0],
          ['Jquery', 9.0, 5.0],
          ['AJAX', 8.0, 5.0],
          ['AngularJS', 8.0, 3.0],
          ['ReactJS', 9.0, 1.5],
          ['NodeJs', 7.0, 3.0],
          ['Java', 8.0, 4.0],
          ['RestFul', 9.0, 4.0],
          ['NO Sql', 7.5, 3.0],
          ['RDBMS', 8.0, 5.0],
          ['AWS', 6.0, 2.0]

        ]);

        var options = {
            title: ''
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('piechart'));

        chart.draw(data, options);
    }

});
