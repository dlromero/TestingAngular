import { obtenerRobots } from './arrays';
describe('Pruebas de arreglos', () => {
  it('Debe retornar almenos 3 robots', () => {
    const res = obtenerRobots();
    expect(res.length).toBeGreaterThanOrEqual(3);
  });

  it('Debe retornar existir Megaman y Ultron', () => {
    const res = obtenerRobots();
    expect(res).toContain('Megaman');
    expect(res).toContain('Ultron');
  });
});
