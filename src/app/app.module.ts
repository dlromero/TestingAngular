import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MedicosComponent } from './intermediate/spies/medicos.component';
import { MedicoComponent } from './intermediate2/medico/medico.component';
import { MedicosService } from './intermediate/spies/medicos.service';
import { HospitalComponent } from './intermediate2/hospital/hospital.component';
import { IncrementadorComponent } from './intermediate2/incrementator/incrementador.component';
import { RouterModule } from '@angular/router';
import { RUTAS } from './advance/routes/aap.routes';
import { NabvarComponent } from './advance/nabvar/nabvar.component';
import { RouterMedicoComponent } from './advance/router-medico/router-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
    NabvarComponent,
    RouterMedicoComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(RUTAS)],
  providers: [MedicosService],
  bootstrap: [AppComponent]
})
export class AppModule {}
