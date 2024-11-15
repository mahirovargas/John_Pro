import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

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
}
