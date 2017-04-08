import {Component, OnInit}      from '@angular/core';
import {SuprafeteService} from '../services/suprafete.service';

declare var google:any;

@Component({
    templateUrl: 'app/components/suprafete.component.html',
    providers:[SuprafeteService]
})

export class SuprafeteComponent implements OnInit{
    //private cheltuieli:any = [];
    
    constructor(private suprafeteService:SuprafeteService){
        
    }
    
    ngOnInit() {
        console.log("Main page loaded..");
        // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

     // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(this.drawChart);
     //google.charts.load('current', {'packages':['geomap']});
     // google.charts.setOnLoadCallback(this.drawMap);
    }

     

    /*  drawMap() {
        var data = google.visualization.arrayToDataTable([
            ['Lat', 'Long', 'Name'],
            [44.426767, 26.102538, 'Bucharest'],
        ]);

        var options = {};
        options['dataMode'] = 'regions';

        var container = document.getElementById('regions_div');
        var geomap = new google.visualization.GeoMap(container);

        geomap.draw(data, options);
      };*/

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Mushrooms', 3],
          ['Onions', 1],
          ['Olives', 1],
          ['Zucchini', 1],
          ['Pepperoni', 2]
        ]);

        // Set chart options
        var options = {'title':'How Much Pizza I Ate Last Night',
                       'width':600,
                       'height':500};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
}