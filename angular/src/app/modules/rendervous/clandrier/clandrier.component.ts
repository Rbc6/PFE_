import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridWeek from '@fullcalendar/timegrid';
import { RendezvousService } from 'src/app/core/services/rendezvous.service';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import { MatDialog } from '@angular/material/dialog';
import { AddRendezvousComponent } from '../add-rendezvous/add-rendezvous.component';
import { ViewRvComponent } from '../view-rv/view-rv.component';
import Tooltip from 'tooltip.js';

@Component({
  selector: 'app-clandrier',
  templateUrl: './clandrier.component.html',
  styleUrls: ['./clandrier.component.scss']
})
export class ClandrierComponent implements OnInit {
 
  calendarOptions: CalendarOptions = {

    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridWeek,timeGridDay'
    },
    plugins: [bootstrap5Plugin , timeGridWeek],
    initialView: 'timeGridWeek',
    slotLabelContent: (arg) => {
      return arg.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    },
    eventClick: this.handleEventClick.bind(this),
    contentHeight: 1200,
    themeSystem: 'bootstrap5',
    aspectRatio: 5,
    slotDuration : '00:05:00',
    buttonText: {
      today: 'Aujourd\'hui',
      day: 'Jour',
      week: 'Semaine'
    },
    buttonIcons:{
      prev: 'chevron-left',
      next: 'chevron-right',
      prevYear: 'chevrons-left', // double chevron
      nextYear: 'chevrons-right',

    },
    titleFormat : { year: 'numeric', month: 'long', day: 'numeric' } ,  
    events: [

    ],
    eventDidMount: (info) => {
      // Ajouter une bulle d'informations (tooltip) avec le statut de l'événement
      const tooltip = new Tooltip(info.el, {
        title: info.event.extendedProps.rendezVous.statut,
        placement: 'top', // Placement de la bulle (haut)
        trigger: 'hover', // Déclenchement de la bulle (au survol)
        container: 'body' // Container où la bulle sera ajoutée
      });
    }
    
  };
  constructor(
    private rendezvousService : RendezvousService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getDataCalendar()
  }

  getDataCalendar(){
    this.rendezvousService.getDataCalendar().subscribe(res => {
      console.log(res); // Log the response
      if (Array.isArray(res)) {
        this.calendarOptions.events = res.map(event => {
          return {
            ...event,
            backgroundColor: this.getEventColor(event.rendezVous.statut),
            borderColor: this.getEventColor(event.rendezVous.statut)
          };
        });
      } else {
        console.error('Response is not an array:', res);
      }
    });
  }
  getEventColor(status: string): string {
    switch (status) {
      case 'CONFIRME':
        return '#006117'; 
      case 'ANNULE':
        return '#dc3545'; 
      case 'EN_COURS':
        return '#6c757d'; 
      case 'TERMINE':
        return '#007bff'; 
      default:
        return '#6c757d'; 
    }
  }

  
  handleEventClick(info:any) {
    
    
    const dialogRef = this.dialog.open(ViewRvComponent, {
      data:info.event._def.extendedProps.rendezVous
    });
    dialogRef.afterClosed().subscribe(result => {
     
    });
  }



  openDialogRendezvous() {
    const dialogRef = this.dialog.open(AddRendezvousComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
     this.getDataCalendar()
    });
  }
  

}
