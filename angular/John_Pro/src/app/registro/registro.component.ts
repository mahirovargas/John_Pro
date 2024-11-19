import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass'],
  imports: [FormsModule]
})
export class RegistroComponent {
  nombre: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.nombre && this.password) {
      localStorage.setItem('nombre', this.nombre);
      localStorage.setItem('password', this.password);
      alert('Datos guardados con éxito');
    }
  }

  resetForm() {
    this.nombre = '';
    this.password = '';
  }

  playClickSound(): void {
    console.log('Reproduciendo sonido...');
    // Aquí puedes añadir la lógica para reproducir un sonido
  }

  navigateToGPreguntas(): void {
    this.playClickSound(); // Reproduce el sonido
    this.router.navigate(['/g.preguntas']); // Navega al componente G.Preguntas
  }
}
