import {Component, OnInit}      from '@angular/core';
import {SuprafeteService} from '../services/suprafete.service';

declare var google:any;

@Component({
    templateUrl: 'app/components/suprafete.component.html',
    providers:[SuprafeteService]
})

export class SuprafeteComponent implements OnInit{
    
    constructor(private suprafeteService:SuprafeteService){
        
    }
    
    ngOnInit() {
    }

      incarcaDiagrama(inregistrare:any){
            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(this.drawChart(inregistrare["Total urban (ha)"],inregistrare["Total rural (ha)"],inregistrare["Judet"]));
      }

      drawChart(urban:number,rural:number,judet:string) {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Tip suprafata');
        data.addColumn('number', 'Total (ha)');
        data.addRows([
          ['Urban', urban],
          ['Rural', rural],
        ]);

        var options = {'title':'Dinamica suprafetelor in judetul '+judet,
                       'width':700,
                       'height':600,}

        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
}