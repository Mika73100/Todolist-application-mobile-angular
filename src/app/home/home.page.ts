import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  myTask = '';
  addTask: boolean;
  currentDate: string;
  constructor(public afDB:AngularFireDatabase) {const timeformat: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour12: false
  };

  
  this.currentDate = new Date().toLocaleTimeString('fr-FR', timeformat); 
}

addTaskToFirebase() {
  this.afDB.list('Tasks/').push({
    text: this.myTask,
    date: new Date().toISOString(),
    checked: false
  });
}
}
