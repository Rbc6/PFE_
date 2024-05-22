import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DoctorService } from 'src/app/core/services/doctor.service';
import { RendezvousService } from 'src/app/core/services/rendezvous.service';
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
    private rendezVousService: RendezvousService
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
              text: 'Nobmre des médcins par spécialité',
              font: {
                size: 16,
              },
              align: 'start',
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
              text: 'Nobmre des médcins disponible par jour',
              font: {
                size: 16,
              },
              align: 'start',
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
    this.rendezVousService.getDataCalandar().subscribe((res) => {
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
}
