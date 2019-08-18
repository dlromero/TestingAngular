import { Routes } from '@angular/router';
import { HospitalComponent } from 'src/app/intermediate2/hospital/hospital.component';
import { MedicoComponent } from '../../intermediate2/medico/medico.component';
import { IncrementadorComponent } from '../../intermediate2/incrementator/incrementador.component';

export const RUTAS: Routes = [
  { path: 'hospital', component: HospitalComponent },
  { path: 'medico/:id', component: MedicoComponent },
  { path: '**', component: IncrementadorComponent }
];
