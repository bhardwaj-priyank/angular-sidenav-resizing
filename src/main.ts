import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ResizableModule } from 'angular-resizable-element';
import { AngularSplitModule } from 'angular-split';


@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ResizableModule, AngularSplitModule],
  templateUrl: './main.html',
  styleUrls: ['./main.css'],
})
export class App {
  keepLeft: boolean = true;
}

bootstrapApplication(App);
