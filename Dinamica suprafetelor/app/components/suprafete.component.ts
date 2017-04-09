import {Component, OnInit}      from '@angular/core';
import {Service} from '../services/service';
import {VanzariComponent} from './vanzari.component';
import {TraficComponent} from './trafic.component';
import {Router} from '@angular/router';

declare var google:any;

@Component({
    templateUrl: 'app/components/suprafete.component.html',
    providers:[Service]
})

export class SuprafeteComponent implements OnInit{
    private static judet:string;
    private static urban:number;
    private static rural:number;
    private static romania:any={};



    private suprafete:any = [];

    
    constructor(private suprafeteService:Service,private router:Router){
        
    }
     ngOnInit() {
         
        this.incarcaSuprafete();
        google.charts.load('current', {'packages':['corechart']});
        
        SuprafeteComponent.judet=localStorage.getItem("judetSelectat");
    }

    incarcaJudet(){
        var selectJudet=document.getElementById("selectJudet");
        var jud=selectJudet.options[selectJudet.selectedIndex].value;
        localStorage.setItem("judetSelectat",jud);
        this.suprafete.forEach(s=>{
            if(s.Judet.toLowerCase()==jud.toLowerCase())
                {this.incarcaDiagrama(s);
                return;}
        });
    }

    incarcaSuprafete(){
        this.suprafeteService.incarcaSuprafete().then(suprafata=> {
                this.suprafete=suprafata.result.records;
                this.editSuprafete();  
                this.suprafete.forEach(s=>{
                    if(s.Judet.toLowerCase()==SuprafeteComponent.judet.toLowerCase())
                        {this.incarcaDiagrama(s);
                        return;}
        });
            }
        ).catch(error=>{
            console.log("Eroare la incarcare din API a suprafetelor");
        })
    }
        

    incarcaDiagrama(inregistrare:any){
           SuprafeteComponent.judet=inregistrare["Judet"];
           var re=/,/gi;
           var ur=inregistrare["Total urban (ha)"];
           ur=ur.replace(re,'');
           SuprafeteComponent.urban=Number(ur);
           var ru=inregistrare["Total rural (ha)"];
           ru=ru.replace(re,'');
           SuprafeteComponent.rural=Number(ru);
           google.charts.setOnLoadCallback(this.drawChart);
     }


    drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Tip suprafata');
        data.addColumn('number', 'Total (ha)');
        data.addRows([
          ['Urban', SuprafeteComponent.urban],
          ['Rural', SuprafeteComponent.rural],
        ]);

        var options = {'title':'Dinamica suprafetelor in '+SuprafeteComponent.judet,
                       'width':1000,
                       'height':800,
                       'is3D': true,
                       'pieStartAngle': 100,
                       'slices': {  1: {offset: 0.1},},
                       'animation': {
                           duration: 1000,
                           easing: 'out',
                           startup: true
      }
                    };

        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }


    incarcaRO(){
        SuprafeteComponent.judet="Romania";
        this.suprafete.forEach(s=>{
                    if(s.Judet.toLowerCase()==SuprafeteComponent.judet.toLowerCase())
                        {this.incarcaDiagrama(s);
                        return;}
        });
    }

    incarcaSupr(){
        this.router.navigate(['suprafete']);
    }

    incarcaVz(){
        this.router.navigate(['vanzari']);
    }

    incarcaCrim(){
       this.router.navigate(['trafic']);
    }

    editSuprafete(){
        this.suprafete.forEach(element => {
            if(element["No."].indexOf("TOTAL")>=0)
                {element["Judet"]="ROMANIA";
                 SuprafeteComponent.romania=element;
                }
        
            if(element["Judet"].indexOf("ARG")>=0)
                element["Judet"]="ARGES";
            if(element["Judet"].indexOf("BAC")>=0)
                element["Judet"]="BACAU";
            if(element["Judet"].indexOf("BISTR")>=0)
                element["Judet"]="BISTRITA-NASAUD";
            if(element["Judet"] == "BOTO?ANI")
                element["Judet"] = "BOTOSANI";
            if(element["Judet"]=="BRA?OV")
                element["Judet"]="BRASOV";
            if(element["Judet"]=="BR?ILA")
                element["Judet"]="BRAILA";
            if(element["Judet"]=="BUCURE?TI")
                element["Judet"] = "BUCURESTI";  
            if(element["Judet"]=="BUZ?U")
                element["Judet"] = "BUZAU";
            if(element["Judet"].indexOf("SEVERIN")>=0)
                element["Judet"]="CARAS-SEVERIN";
            if(element["Judet"]=="C?L?RA?I")
                element["Judet"]="CALARASI";
            if(element["Judet"]=="CONSTAN?A")
                element["Judet"]="CONSTANTA";
            if(element["Judet"]=="DÂMBOVI?A")
                element["Judet"]="DAMBOVITA";
            if(element["Judet"]=="GALA?I")
                element["Judet"]="GALATI";
            if(element["Judet"]=="IA?I")
                element["Judet"]="IASI";
            if(element["Judet"]=="IALOMI?A")
                element["Judet"]="IALOMITA";
            if(element["Judet"]=="MARAMURE?")
                element["Judet"]="MARAMURES";
            if(element["Judet"]=="MEHEDIN?I")
                element["Judet"]="MEHEDINTI";
            if(element["Judet"]=="MURE?")
                element["Judet"]="MURES";
            if(element["Judet"]=="NEAM?")
                element["Judet"]="NEAMT";
            if(element["Judet"]=="S?LAJ")
                element["Judet"]="SALAJ";
            if(element["Judet"]=="TIMI?")
                element["Judet"]="TIMIS";
            if(element["Judet"]=="VÂLCEA")
                element["Judet"]="VALCEA";       
        });
    }
}
