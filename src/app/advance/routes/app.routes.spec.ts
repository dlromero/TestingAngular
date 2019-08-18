import { RUTAS } from './aap.routes';
import { MedicoComponent } from '../../intermediate2/medico/medico.component';
describe('Rutas Principales', () => {
  it('Debe existir la ruta /medico/:id', () => {
    expect(RUTAS).toContain({
      path: 'medico/:id',
      component: MedicoComponent
    });
  });
});
