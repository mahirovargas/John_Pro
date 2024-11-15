import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
  
    FormsModule
  ]
})
export class AppModule { }

@Component({
  selector: 'app-g.preguntas.component',
  templateUrl: './g.preguntas.component.html',
  styleUrls: ['./g.preguntas.component.css']
})
export class FormularioPreguntasComponent {
  // Inicializa la lista de preguntas con una pregunta vacía como ejemplo
  preguntas = [
    { texto: '', tipo: 'texto' }
  ];

  // Método para agregar una nueva pregunta de un tipo específico
  agregarPregunta(tipo: string) {
    this.preguntas.push({ texto: '', tipo });
  }

  // Método para eliminar una pregunta específica por su índice
  eliminarPregunta(index: number) {
    this.preguntas.splice(index, 1);
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    console.log('Preguntas guardadas:', this.preguntas);
    // Aquí puedes agregar la lógica para guardar o enviar las preguntas, según el caso
  }

  // Método para cancelar y reiniciar el formulario
  cancelar() {
    this.preguntas = [{ texto: '', tipo: 'texto' }]; // Restablece la lista a una pregunta vacía
  }
}
