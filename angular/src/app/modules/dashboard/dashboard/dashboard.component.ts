import { Component, OnInit } from '@angular/core';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';
import { DoctorService } from 'src/app/core/services/doctor.service';
import { DossierService } from 'src/app/core/services/dossier.service';
import { RendezvousService } from 'src/app/core/services/rendezvous.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  charttwo: any;
  specialiteMedicale: any = [];
  constructor(
    private doctorService: DoctorService,
    private rendezVousService: RendezvousService,
    private userService : UsersService,
    private dossierService : DossierService
  ) {}
  jours = [
    'LUNDI',
    'MARDI',
    'MERCREDI',
    'JEUDI',
    'VENDREDI',
    'SAMEDI',
    'DIMANCHE',
  ];
  nombrejour = [0, 0, 0, 0, 0, 0, 0];
  allDoc: any;
  specialite: any = [];
  nbSpecialite: any = [];
  
 
  ngOnInit(): void {
    Chart.register(...registerables);
    this.getAllDoctors();
    this.getAllRendezVous();
    this.getAllUsers()
    this.getAllDossiers()
    this.NbMedecinParSpecialite()
    this.getDossierParGenre()
    this.DureeConsultationMoyen()
    this.getAllAlerts()
    this.loadRendezVousData()

  }
  AllAlerts : any =[]
  getAllAlerts(){
    this.rendezVousService.getAllAlert().subscribe((res)=>{
      this.AllAlerts=res
    })
  }

  NbMedecinParSpecialite(){
    this.doctorService.getSpecialiteForDash().subscribe((res) => {
      this.specialiteMedicale = res;
      this.specialiteMedicale.map((item: any) => {
        this.specialite.push(item.sp);
        this.nbSpecialite.push(item.nb);
      });
      const myChart = new Chart('myChartTwo', {
        type: 'bar',
        data: {
          labels: this.specialite,

          datasets: [
            {
              label: 'Votes',
              data: this.nbSpecialite,
              backgroundColor: ['#1775a3'],
              borderColor: ['#1775a3'],
              borderWidth: 1,

              barPercentage: 0.7,
              barThickness: 30,
              borderRadius: 8,
            },
          ],
        },
        options: {
          scales: {
            y: {
              title: {
                display: false,
              },
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: true,
              padding: 20,
              color: 'black',
              text: 'Nombre des médecins par spécialité',
              font: {
                size: 16,
              },
              align: 'center',
            },
          },
        },
      });
    });
  }

  allDispo: any = []
  getAllDoctors() {
    this.doctorService.getForMyCHARTone().subscribe((res) => {
      this.allDispo = res;
      console.log(res);
      this.allDispo.map((i: any) => {
        console.log('mes-jours', i.joursEnums);
        i.joursEnums.map((jour: any) => {
          if (jour === 'LUNDI') {
            this.nombrejour[0] = this.nombrejour[0] + 1;
          }
          if (jour === 'MARDI') {
            this.nombrejour[1] = this.nombrejour[1] + 1;
          }
          if (jour === 'MERCREDI') {
            this.nombrejour[2] = this.nombrejour[2] + 1;
          }
          if (jour === 'JEUDI') {
            this.nombrejour[3] = this.nombrejour[3] + 1;
          }
          if (jour === 'VENDREDI') {
            this.nombrejour[4] = this.nombrejour[4] + 1;
          }
          if (jour === 'SAMEDI') {
            this.nombrejour[5] = this.nombrejour[5] + 1;
          }
          if (jour === 'DIMANCHE') {
            this.nombrejour[6] = this.nombrejour[6] + 1;
          }
        });
      });
      const myChart = new Chart('myChart', {
        type: 'bar',
        data: {
          labels: this.jours,

          datasets: [
            {
              label: 'Votes',
              data: this.nombrejour,
              backgroundColor: ['#1775a3'],
              borderColor: ['#1775a3'],
              borderWidth: 1,

              barPercentage: 0.7,
              barThickness: 30,
              borderRadius: 8,
            },
          ],
        },
        options: {
          scales: {
            y: {
              title: {
                display: false,
              },
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: true,
              padding: 20,
              color: 'black',
              text: 'Nombre des médecins disponible par jour',
              font: {
                size: 16,
              },
              align: 'center',
            },
          },
        },
      });
    });
  }

  allRendezVous:any = []
  nbConfirme = 0;
  nbAnnuler = 0;
  nbTerminer = 0;
  nbENcours = 0;

  nbConsultation = 0
  nbAnalyse =0
  nbRadio = 0
  nbAmbula = 0
  getAllRendezVous() {
    this.rendezVousService.getDataCalendar().subscribe((res) => {
      console.log('getAllRendezVous', res);
      this.allRendezVous = res
      this.allRendezVous.map((i:any)=>{
        if(i.rendezVous.statut == "CONFIRME"){
          this.nbConfirme = this.nbConfirme +1
        }
        if(i.rendezVous.statut == "ANNULE"){
          this.nbAnnuler = this.nbAnnuler +1
        }
        if(i.rendezVous.statut == "TERMINE"){
          this.nbTerminer = this.nbTerminer +1
        }
        if(i.rendezVous.statut == "EN_COURS"){
          this.nbENcours = this.nbENcours +1
        }
        if(i.rendezVous.typeRendezVous == "CONSULTATION"){
          this.nbConsultation = this.nbConsultation +1
        }
        if(i.rendezVous.typeRendezVous == "ANALYSE"){
          this.nbAnalyse = this.nbAnalyse +1
        }
        if(i.rendezVous.typeRendezVous == "RADIO"){
          this.nbRadio = this.nbRadio +1
        }
        if(i.rendezVous.typeRendezVous == "AMBULATOIRE"){
          this.nbAmbula = this.nbAmbula +1
        }
      })
      const myPie = new Chart('myPie', {
        type: 'pie',
        data: {
          labels: ['CONFIRME', 'ANNULE', 'TERMINE', 'EN_COURS'],
          datasets: [
            {
              label: 'My First Dataset',
              data: [this.nbConfirme, this.nbAnnuler, this.nbTerminer , this.nbENcours],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(0, 205, 86)',
              ],
              hoverOffset: 4,
            },
          ],
        },
      });

      const myPieTwo = new Chart('myPieTwo', {
        type: 'pie',
        data: {
          labels: ['CONSULTATION', 'ANALYSE', 'RADIO', 'AMBULATOIRE'],
          datasets: [
            {
              label: 'My First Dataset',
              data: [this.nbConsultation, this.nbAnalyse, this.nbRadio , this.nbAmbula],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(0, 205, 86)',
              ],
              hoverOffset: 4,
            },
          ],
        },
      });
    });
  }

  dureeMoyen: number = 0;
  Rdv: any =[];

DureeConsultationMoyen() {
  this.rendezVousService.getDataCalendar().subscribe((res) => {
    this.Rdv = res;
    let totalDuree = 0;
    this.Rdv.forEach((i: any) => {
      if (i.rendezVous.duree === "DUREE_15") {
        totalDuree += 15;
      } else if (i.rendezVous.duree === "DUREE_30") {
        totalDuree += 30;
      } else if (i.rendezVous.duree === "DUREE_45") {
        totalDuree += 45;
      } else if (i.rendezVous.duree === "DUREE_60") {
        totalDuree += 60;
      }
    });

    
    if (this.Rdv.length > 0) {
      this.dureeMoyen = parseFloat((totalDuree / this.Rdv.length).toFixed(1));

    } else {
      this.dureeMoyen = 0;
    }
  });
}


  homme = 0
  femme = 0
  getDossierParGenre() {
    this.dossierService.getAllDossiers().subscribe((res) => {
      console.log('getAllRendezVous', res);
      this.allDoss = res
      this.allDoss.map((i:any)=>{
        if(i.genre == "HOMME"){
          this.homme = this.homme +1
        }
        if(i.genre == "FEMME"){
          this.femme = this.femme +1
        }
       
      })
    

      const myPieThree = new Chart('pieThree', {
        type: 'pie',
        data: {
          labels: ['Homme', 'Femme'],
          datasets: [
            {
              label: 'My First Dataset',
              data: [this.homme, this.femme],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(0, 205, 86)',
              ],
              hoverOffset: 4,
            },
          ],
        },
      });
    });
  }
 

  loadRendezVousData(): void {
    this.rendezVousService.getDataCalendar().subscribe((res) => {
      const dataByHour = new Map<string, number>();
      this.Rdv =res
      this.Rdv.map((rdv: any) => {
        const date = new Date(rdv.rendezVous.date);
        const hour = date.getHours().toString().padStart(2, '0') + ':00'; // Format HH:00

        if (dataByHour.has(hour)) {
          dataByHour.set(hour, dataByHour.get(hour)! + 1);
        } else {
          dataByHour.set(hour, 1);
        }
      });
      const MyLineChart = new Chart('lineOne', {
        type: 'line',
        data: {
          labels: ['8', '9'],
          datasets: [
            {
              label: 'My First Dataset',
              data: dataByHour,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(0, 205, 86)',
              ],
              
            },
          ],
        },
      });

    });
  }


  admin = 0
  nurse = 0
  allusers :any = [];
  getAllUsers(){
    this.userService.getAllUsers().subscribe((res)=>{
      this.allusers=res
      console.log(res)
      this.allusers.map((i:any)=>{
        if(i.role == "ADMIN"){
          this.admin = this.admin +1
        }
        if(i.role == "NURSE"){
          this.nurse = this.nurse +1
        }
       
      })
    })
  }


  allDoss :any =  [];
  getAllDossiers(){
    this.dossierService.getAllDossiers().subscribe((res)=>{
      this.allDoss=res
      console.log(res)
    })
  }
}
