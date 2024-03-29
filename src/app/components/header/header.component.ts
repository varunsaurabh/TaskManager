import { Component } from '@angular/core';
import {UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = "Tasks";
  showAddtask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService){
      this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddtask = value));
  }

  toggle(){
    this.uiService.toggleAddTask();
  }
}
