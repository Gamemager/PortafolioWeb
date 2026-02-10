import { Component, signal } from '@angular/core';
import { Sidebar } from './components/sidebar/sidebar';
import { BentoGrid } from './components/bento-grid/bento-grid';

@Component({
  selector: 'app-root',
  imports: [Sidebar, BentoGrid],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
