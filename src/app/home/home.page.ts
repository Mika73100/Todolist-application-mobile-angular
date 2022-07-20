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
  tasks = [];

  constructor(public afDB:AngularFireDatabase) {
    const timeformat: Intl.DateTimeFormatOptions = {

    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour12: false
  };

  
  this.currentDate = new Date().toLocaleTimeString('fr-FR', timeformat);
  this.getTasks(); 
}

addTaskToFirebase() {
  this.afDB.list('Tasks/').push({
    text: this.myTask,
    date: new Date().toISOString(),
    checked: false
  });
  this.showForm();
}

showForm() {
  this.addTask = !this.addTask;
  this.myTask = '';
}

getTasks() {
  this.afDB.list('Tasks/').snapshotChanges().subscribe(actions => {
    this.tasks = [];
    actions.forEach(action => {
      this.tasks.push({
        key: action.key,
        text: action.payload.exportVal().text,
        hour: action.payload.exportVal().date.substring(11, 16),
        checked: action.payload.exportVal().checked
      });
    });
  });
  }
  

  changeCheckState(ev: any) {
    this.afDB.object('Tasks/' + ev.key + '/checked/').set(ev.checked);
  }

  deleteTask(task: any) {
    this.afDB.list('Tasks/').remove(task.key);
  }







}
