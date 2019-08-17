import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { of, throwError, EMPTY } from 'rxjs';

describe('MedicosComponent', () => {
  let componente: MedicosComponent;
  const service = new MedicosService(null);

  beforeEach(() => {
    componente = new MedicosComponent(service);
  });

  it('Init: Debe cargar los médicos', () => {
    const medicos = ['medico1', 'medico2', 'medico3'];
    spyOn(service, 'getMedicos').and.callFake(() => {
      return of([medicos]);
    });
    componente.ngOnInit();

    expect(componente.medicos.length).toBeGreaterThan(0);
  });

  it('Debe llamar al servidor para agregar un médico', () => {
    const spie = spyOn(service, 'agregarMedico').and.callFake(medico => {
      return EMPTY;
    });

    componente.agregarMedico();

    expect(spie).toHaveBeenCalled();
  });

  it('Debe agregar un nuevo médico al arreglo de médicos', () => {
    const medico = { id: 1, nombre: 'Juan' };
    spyOn(service, 'agregarMedico').and.returnValue(of(medico));

    componente.agregarMedico();
    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });

  it('Si falla la adición, la propiedad mensajeError, debe ser igual al error del servicio', () => {
    const miError = 'No se pudo agregar el médico';
    spyOn(service, 'agregarMedico').and.returnValue(throwError(miError));

    componente.agregarMedico();
    expect(componente.mensajeError).toBe(miError);
  });

  it('Debe llamar al servidor para borrar un médico', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const spie = spyOn(service, 'borrarMedico').and.returnValue(EMPTY);

    componente.borrarMedico('1');
    expect(spie).toHaveBeenCalledWith('1');
  });

  it('Mo debe llamar al servidor para borrar un médico', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const spie = spyOn(service, 'borrarMedico').and.returnValue(EMPTY);

    componente.borrarMedico('1');
    expect(spie).not.toHaveBeenCalledWith('1');
  });
});
