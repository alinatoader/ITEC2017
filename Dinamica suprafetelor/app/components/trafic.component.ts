import {Component, OnInit}      from '@angular/core';
import {Service} from '../services/service';
import {Router} from '@angular/router';

declare var google:any;

@Component({
    templateUrl: 'app/components/trafic.component.html',
    providers:[Service]
})

export class TraficComponent implements OnInit{
    private persoane:any=[];

    private static judet:string;
    private static urban:number;
    private static rural:number;
    private static gen:string;

    private fem:boolean=true;
    private mas:boolean=false;

    constructor(private service:Service,private router:Router){

    }
    ngOnInit(){
        TraficComponent.judet=localStorage.getItem("judetSelectat");
        TraficComponent.gen="feminin";
        this.incarcaPersoane("feminin");
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(this.drawChart);
    }
    incarcaPersoane(gen:string){
        this.service.incarcaTrafic(TraficComponent.judet,gen).then(persoana=>{
            this.persoane=persoana.result.records;
            this.initiateUrbanRural();
        }).catch(error=>{
            console.log("Eroare la incarcare din API a persoanelor traficate");
        })
    }
    initiateUrbanRural(){
        TraficComponent.urban=0;
        TraficComponent.rural=0;
        this.persoane.forEach(pers=>{
            if(pers["mediu_prov"].indexOf("rural")>=0)
                TraficComponent.rural=TraficComponent.rural+1;
            else
                TraficComponent.urban=TraficComponent.urban+1;
        });
        google.charts.setOnLoadCallback(this.drawChart);
        
    }
    getGender(){
        console.log(this.fem);
        console.log(this.mas);
        
        if(this.mas==true){
            this.fem=false;
            this.incarcaPersoane("masculin");
            TraficComponent.gen="masculin";
            return;
            
        }
        if(this.fem==true){
            this.incarcaPersoane("feminin");
            TraficComponent.gen="feminin";
            this.mas=false;
            return;
        }
    }
    drawChart(){
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Mediu provenienta');
        data.addColumn('number', 'Persoane traficate');
        data.addRows([
          ['Urban', TraficComponent.urban],
          ['Rural', TraficComponent.rural],
        ]);

        // Set chart options
        var options = {'title':'Traficul de persoane in '+TraficComponent.judet + ' genul ' + TraficComponent.gen,
                       'width':1000,
                       'height':800,
                       'is3D': true,
                       'pieStartAngle': 100,
                       'slices': {  1: {offset: 0.1},},
                       'animation': {
                           duration: 1000,
                           easing: 'out',
                           startup: true}};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_trafic'));
        chart.draw(data, options);
    }

  
    incarcaSupr(){
        this.router.navigate(['suprafete']);
    }

    incarcaVz(){
        this.router.navigate(['vanzari']);
    }


}
