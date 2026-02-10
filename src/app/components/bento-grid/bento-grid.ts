import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bento-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bento-grid.html',
  styleUrls: ['./bento-grid.scss']
})
export class BentoGrid {
  techStack = ['ANGULAR', 'TAILWIND', 'BOOTSTRAP', 'NODE.JS', 'FIGMA', 'CSS3'];

  projects = [
    {
      title: 'Enterprise CRM',
      desc: 'Gestión de clientes con dashboard administrativo complejo.',
      tags: ['Angular', 'Node.js', 'CRUD'],
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop'
    },
    {
      title: 'E-Commerce Platform',
      desc: 'Tienda online completa con pasarela de pagos.',
      tags: ['Angular', 'Bootstrap', 'Mercado Pago'],
      img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2304&auto=format&fit=crop'
    },
    {
      title: 'SaaS Landing Page',
      desc: 'Página de alta conversión optimizada para SEO.',
      tags: ['Tailwind', 'Figma', 'SEO'],
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop'
    },
    {
      title: 'System Dashboard',
      desc: 'Panel de control analítico con reportes en tiempo real.',
      tags: ['Angular', 'ChartJS'],
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop'
    }
  ];
   scrollToProjects() {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'CV_Eixon_DeLaTorre.pdf';
    link.click();
  }
}
